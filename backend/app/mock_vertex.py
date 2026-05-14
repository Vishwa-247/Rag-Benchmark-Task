from __future__ import annotations

import re
from dataclasses import dataclass
from typing import Iterable


@dataclass
class Embedding:
    values: list[float]


class TextEmbeddingModel:
    def __init__(self, model_name: str, embedder: object) -> None:
        self.model_name = model_name
        self._embedder = embedder

    @classmethod
    def from_pretrained(cls, model_name: str, embedder: object) -> "TextEmbeddingModel":
        return cls(model_name, embedder)

    def get_embeddings(self, texts: Iterable[str]) -> list[Embedding]:
        if hasattr(self._embedder, "embed_texts"):
            vectors = self._embedder.embed_texts(list(texts))
        else:
            vectors = self._embedder.embed(list(texts))
        return [Embedding(values=vector) for vector in vectors]


@dataclass
class GenerationResponse:
    text: str


class RuleBasedQueryExpander:
    def __init__(self) -> None:
        self._rules = [
            (r"\b(?:peak load|traffic spike|burst|surge|flash crowd)\b", "autoscaling rate limit queue depth load shedding"),
            (r"\b(?:thundering herd|cache invalidation|stampede)\b", "stale-while-revalidate request coalescing singleflight"),
            (r"\b(?:downstream latency|timeouts|circuit breaker)\b", "bulkhead backpressure retries exponential"),
            (r"\b(?:replica lag|failover|primary)\b", "read-after-write consistency leader lease"),
            (r"\b(?:network load|bandwidth|cdn)\b", "edge caching compression origin offload"),
            (r"\b(?:noisy neighbor|multi-tenant|fairness)\b", "priority queues per-tenant throttling"),
        ]
        self._fallback = "semantic retrieval context latency throughput resilience"

    def expand(self, query: str) -> str:
        expanded = query.strip()
        matched = False
        for pattern, extra in self._rules:
            if re.search(pattern, query, flags=re.IGNORECASE):
                expanded = f"{expanded} {extra}"
                matched = True
        if not matched:
            expanded = f"{expanded} {self._fallback}".strip()
        return expanded


class GenerativeModel:
    def __init__(self, model_name: str, expander: RuleBasedQueryExpander) -> None:
        self.model_name = model_name
        self._expander = expander

    @classmethod
    def from_pretrained(cls, model_name: str, expander: RuleBasedQueryExpander) -> "GenerativeModel":
        return cls(model_name, expander)

    def generate_content(self, prompt: str) -> GenerationResponse:
        return GenerationResponse(text=self._expander.expand(prompt))
