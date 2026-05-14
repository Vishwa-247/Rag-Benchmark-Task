from __future__ import annotations

from .domain import SearchOutcome
from .mock_vertex import GenerativeModel, TextEmbeddingModel
from .vector_store import ChromaVectorStore


class RetrievalEngine:
    def __init__(
        self,
        embedding_model: TextEmbeddingModel,
        generative_model: GenerativeModel,
        vector_store: ChromaVectorStore,
    ) -> None:
        self._embedding_model = embedding_model
        self._generative_model = generative_model
        self._vector_store = vector_store

    def search(self, query: str, strategy: str, top_k: int) -> SearchOutcome:
        if strategy not in {"A", "B"}:
            raise ValueError("Strategy must be 'A' or 'B'.")

        expanded_query = None
        query_for_embedding = query
        if strategy == "B":
            expanded_query = self._generative_model.generate_content(query).text
            query_for_embedding = expanded_query

        embedding = self._embedding_model.get_embeddings([query_for_embedding])[0].values
        results = self._vector_store.query(embedding, top_k)
        return SearchOutcome(
            query=query,
            strategy=strategy,
            expanded_query=expanded_query,
            results=results,
        )
