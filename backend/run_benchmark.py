from __future__ import annotations

import argparse
from pathlib import Path

from backend.app.benchmark import format_benchmark_json, format_benchmark_markdown
from backend.app.config import PROJECT_ROOT, USE_LIGHTWEIGHT_EMBEDDER
from backend.app.main import build_orchestrator


def main() -> None:
    parser = argparse.ArgumentParser(description="Run the RAG benchmark and write outputs.")
    parser.add_argument("--output-dir", default=str(PROJECT_ROOT), help="Output directory")
    parser.add_argument("--top-k", type=int, default=3, help="Top K results")
    parser.add_argument("--max-attempts", type=int, default=3, help="Validation attempts")
    parser.add_argument(
        "--lightweight",
        action="store_true",
        help="Use the lightweight deterministic embedder",
    )
    args = parser.parse_args()

    orchestrator = build_orchestrator(use_lightweight=args.lightweight or USE_LIGHTWEIGHT_EMBEDDER)
    orchestrator.initialize()
    outcome = orchestrator.benchmark(None, args.top_k, args.max_attempts)

    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    json_path = output_dir / "retrieval_benchmark.json"
    md_path = output_dir / "retrieval_benchmark.md"

    json_path.write_text(format_benchmark_json(outcome), encoding="utf-8")
    md_path.write_text(format_benchmark_markdown(outcome), encoding="utf-8")

    print(f"Wrote {json_path}")
    print(f"Wrote {md_path}")


if __name__ == "__main__":
    main()
