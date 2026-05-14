from dataclasses import dataclass
from typing import Any, Optional


@dataclass
class ChunkResult:
    id: str
    text: str
    score: float
    metadata: dict[str, Any]


@dataclass
class SearchOutcome:
    query: str
    strategy: str
    expanded_query: Optional[str]
    results: list[ChunkResult]


@dataclass
class BenchmarkQueryOutcome:
    query: str
    expanded_query: str
    strategy_a: list[ChunkResult]
    strategy_b: list[ChunkResult]


@dataclass
class BenchmarkOutcome:
    run_id: str
    created_at: str
    attempts: int
    results: list[BenchmarkQueryOutcome]
