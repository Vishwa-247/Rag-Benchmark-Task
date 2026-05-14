from typing import Any, Optional, Literal
from pydantic import BaseModel, Field


class SearchRequest(BaseModel):
    query: str = Field(..., min_length=3)
    strategy: Literal["A", "B"]
    top_k: int = Field(3, ge=1, le=10)


class ChunkResult(BaseModel):
    id: str
    score: float
    text: str
    metadata: dict[str, Any]


class SearchResponse(BaseModel):
    query: str
    strategy: str
    expanded_query: Optional[str]
    results: list[ChunkResult]


class BenchmarkRequest(BaseModel):
    queries: Optional[list[str]] = None
    top_k: int = Field(3, ge=1, le=10)
    max_attempts: int = Field(3, ge=1, le=5)


class BenchmarkQueryResult(BaseModel):
    query: str
    expanded_query: str
    strategy_a: list[ChunkResult]
    strategy_b: list[ChunkResult]


class BenchmarkResponse(BaseModel):
    run_id: str
    created_at: str
    attempts: int
    results: list[BenchmarkQueryResult]
