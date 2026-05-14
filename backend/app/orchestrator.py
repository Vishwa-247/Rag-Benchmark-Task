from __future__ import annotations

from pathlib import Path
from typing import Iterable, Optional

from .benchmark import DEFAULT_BENCHMARK_QUERIES, run_benchmark_with_validation
from .dataset import load_paragraphs
from .domain import BenchmarkOutcome, SearchOutcome
from .retrieval import RetrievalEngine
from .vector_store import ChromaVectorStore
from .mock_vertex import TextEmbeddingModel


class RAGOrchestrator:
    def __init__(
        self,
        dataset_path: Path,
        vector_store: ChromaVectorStore,
        retrieval_engine: RetrievalEngine,
        embedding_model: TextEmbeddingModel,
    ) -> None:
        self._dataset_path = dataset_path
        self._vector_store = vector_store
        self._retrieval_engine = retrieval_engine
        self._embedding_model = embedding_model
        self._initialized = False

    def initialize(self) -> None:
        if self._initialized:
            return
        self._vector_store.reset()
        paragraphs = load_paragraphs(self._dataset_path)
        self.ingest_documents(paragraphs)
        self._initialized = True

    def ingest_documents(self, documents: Iterable[dict]) -> None:
        ids: list[str] = []
        texts: list[str] = []
        metadatas: list[dict] = []
        for item in documents:
            tags = item.get("tags", [])
            if isinstance(tags, list):
                tag_value = ", ".join(tags)
            else:
                tag_value = str(tags)
            ids.append(item["id"])
            texts.append(item["text"])
            metadatas.append({
                "title": item.get("title", ""),
                "tags": tag_value,
                "source": "local",
            })
        embeddings = self._embedding_model.get_embeddings(texts)
        self._vector_store.add_documents(
            ids=ids,
            texts=texts,
            metadatas=metadatas,
            embeddings=[embedding.values for embedding in embeddings],
        )

    def search(self, query: str, strategy: str, top_k: int) -> SearchOutcome:
        return self._retrieval_engine.search(query, strategy, top_k)

    def benchmark(
        self,
        queries: Optional[Iterable[str]],
        top_k: int,
        max_attempts: int,
    ) -> BenchmarkOutcome:
        queries_to_run = list(queries) if queries else DEFAULT_BENCHMARK_QUERIES
        return run_benchmark_with_validation(
            engine=self._retrieval_engine,
            queries=queries_to_run,
            top_k=top_k,
            max_attempts=max_attempts,
        )
