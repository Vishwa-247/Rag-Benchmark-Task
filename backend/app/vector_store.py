from __future__ import annotations

from typing import Iterable, Optional

import chromadb
from chromadb.config import Settings

from .domain import ChunkResult


class ChromaVectorStore:
    def __init__(
        self,
        collection_name: str,
        persist_directory: Optional[str] = None,
        space: str = "cosine",
    ) -> None:
        settings = Settings(anonymized_telemetry=False, allow_reset=True)
        if persist_directory:
            self._client = chromadb.PersistentClient(path=persist_directory, settings=settings)
        else:
            self._client = chromadb.Client(settings=settings)
        self._collection_name = collection_name
        self._metadata = {"hnsw:space": space}
        self._collection = self._client.get_or_create_collection(
            name=self._collection_name,
            metadata=self._metadata,
        )
        self._space = space

    def reset(self) -> None:
        self._client.reset()
        self._collection = self._client.get_or_create_collection(
            name=self._collection_name,
            metadata=self._metadata,
        )

    def add_documents(
        self,
        ids: Iterable[str],
        texts: Iterable[str],
        metadatas: Iterable[dict],
        embeddings: Iterable[list[float]],
    ) -> None:
        self._collection.add(
            ids=list(ids),
            documents=list(texts),
            metadatas=list(metadatas),
            embeddings=list(embeddings),
        )

    def query(self, embedding: list[float], top_k: int) -> list[ChunkResult]:
        result = self._collection.query(
            query_embeddings=[embedding],
            n_results=top_k,
            include=["documents", "metadatas", "distances"],
        )

        ids = result.get("ids", [[]])[0]
        docs = result.get("documents", [[]])[0]
        metadatas = result.get("metadatas", [[]])[0]
        distances = result.get("distances", [[]])[0]

        results: list[ChunkResult] = []
        for chunk_id, text, metadata, distance in zip(ids, docs, metadatas, distances):
            score = self._distance_to_score(distance)
            results.append(ChunkResult(id=chunk_id, text=text, score=score, metadata=metadata))
        return results

    def _distance_to_score(self, distance: float) -> float:
        if self._space == "cosine":
            return max(0.0, 1.0 - distance)
        return -distance
