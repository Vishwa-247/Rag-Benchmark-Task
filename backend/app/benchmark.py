from __future__ import annotations

import json
import uuid
from datetime import datetime, timezone
from typing import Iterable

from .domain import BenchmarkOutcome, BenchmarkQueryOutcome
from .retrieval import RetrievalEngine


DEFAULT_BENCHMARK_QUERIES = [
    "How does the system handle peak load without dropping requests?",
    "What mitigates a thundering herd after cache invalidation?",
    "How do we prevent overload when downstream latency spikes and queues back up?",
]


def run_benchmark(
    engine: RetrievalEngine,
    queries: Iterable[str],
    top_k: int,
) -> BenchmarkOutcome:
    created_at = datetime.now(timezone.utc).isoformat()
    run_id = str(uuid.uuid4())
    results: list[BenchmarkQueryOutcome] = []

    for query in queries:
        outcome_a = engine.search(query, "A", top_k)
        outcome_b = engine.search(query, "B", top_k)
        expanded_query = outcome_b.expanded_query or query
        results.append(
            BenchmarkQueryOutcome(
                query=query,
                expanded_query=expanded_query,
                strategy_a=outcome_a.results,
                strategy_b=outcome_b.results,
            )
        )

    return BenchmarkOutcome(run_id=run_id, created_at=created_at, attempts=1, results=results)


def validate_benchmark(outcome: BenchmarkOutcome, top_k: int) -> list[str]:
    errors: list[str] = []
    for index, entry in enumerate(outcome.results, start=1):
        if len(entry.strategy_a) < top_k:
            errors.append(f"Query {index} missing Strategy A results.")
        if len(entry.strategy_b) < top_k:
            errors.append(f"Query {index} missing Strategy B results.")
        if entry.expanded_query.strip() == entry.query.strip():
            errors.append(f"Query {index} has no query expansion.")
    return errors


def run_benchmark_with_validation(
    engine: RetrievalEngine,
    queries: Iterable[str],
    top_k: int,
    max_attempts: int,
) -> BenchmarkOutcome:
    attempts = 0
    last_outcome: BenchmarkOutcome | None = None
    last_errors: list[str] = []
    while attempts < max_attempts:
        attempts += 1
        last_outcome = run_benchmark(engine, queries, top_k)
        last_outcome.attempts = attempts
        last_errors = validate_benchmark(last_outcome, top_k)
        if not last_errors:
            return last_outcome
    raise RuntimeError("Benchmark validation failed: " + "; ".join(last_errors))


def format_benchmark_json(outcome: BenchmarkOutcome) -> str:
    payload = {
        "run_id": outcome.run_id,
        "created_at": outcome.created_at,
        "attempts": outcome.attempts,
        "results": [
            {
                "query": entry.query,
                "expanded_query": entry.expanded_query,
                "strategy_a": [result.__dict__ for result in entry.strategy_a],
                "strategy_b": [result.__dict__ for result in entry.strategy_b],
            }
            for entry in outcome.results
        ],
    }
    return json.dumps(payload, indent=2)


def format_benchmark_markdown(outcome: BenchmarkOutcome) -> str:
    lines = [
        "# Retrieval Benchmark (Strategy A vs Strategy B)",
        "",
        f"Run ID: {outcome.run_id}",
        f"Created: {outcome.created_at}",
        "",
    ]
    for idx, entry in enumerate(outcome.results, start=1):
        lines.extend(
            [
                f"## Query {idx}",
                "",
                f"Query: {entry.query}",
                "",
                f"Expanded query: {entry.expanded_query}",
                "",
                "| Strategy | Rank | Chunk ID | Score | Snippet |",
                "|---|---|---|---|---|",
            ]
        )
        for strategy_name, results in (
            ("A", entry.strategy_a),
            ("B", entry.strategy_b),
        ):
            for rank, result in enumerate(results, start=1):
                snippet = result.text.replace("\n", " ")[:120]
                lines.append(
                    f"| {strategy_name} | {rank} | {result.id} | {result.score:.4f} | {snippet} |"
                )
        lines.append("")
    return "\n".join(lines)
