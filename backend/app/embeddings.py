from __future__ import annotations

import hashlib
import re
from typing import Iterable

import numpy as np


class SentenceTransformerEmbedder:
    def __init__(self, model_name: str) -> None:
        from sentence_transformers import SentenceTransformer

        self.model = SentenceTransformer(model_name)

    def embed(self, texts: Iterable[str]) -> list[list[float]]:
        vectors = self.model.encode(list(texts), normalize_embeddings=True)
        return [vector.tolist() for vector in vectors]


class DeterministicHashEmbedder:
    def __init__(self, dim: int = 64) -> None:
        self.dim = dim

    def embed(self, texts: Iterable[str]) -> list[list[float]]:
        vectors: list[list[float]] = []
        for text in texts:
            vector = np.zeros(self.dim, dtype=np.float32)
            tokens = re.findall(r"[a-z0-9]+", text.lower())
            for token in tokens:
                digest = hashlib.md5(token.encode("utf-8")).hexdigest()
                index = int(digest, 16) % self.dim
                vector[index] += 1.0
            norm = np.linalg.norm(vector) or 1.0
            vectors.append((vector / norm).tolist())
        return vectors


class EmbeddingService:
    def __init__(self, embedder: object) -> None:
        self.embedder = embedder

    def embed_texts(self, texts: Iterable[str]) -> list[list[float]]:
        return self.embedder.embed(texts)
