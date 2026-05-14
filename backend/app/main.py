from __future__ import annotations

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .benchmark import format_benchmark_json
from .config import (
    ALLOWED_ORIGINS,
    CHROMA_COLLECTION,
    CHROMA_DIR,
    DATASET_PATH,
    EMBEDDING_MODEL_NAME,
    USE_LIGHTWEIGHT_EMBEDDER,
    USE_PERSISTENT_CHROMA,
)
from .embeddings import DeterministicHashEmbedder, SentenceTransformerEmbedder
from .mock_vertex import GenerativeModel, RuleBasedQueryExpander, TextEmbeddingModel
from .orchestrator import RAGOrchestrator
from .retrieval import RetrievalEngine
from .schemas import BenchmarkRequest, BenchmarkResponse, SearchRequest, SearchResponse
from .vector_store import ChromaVectorStore


def build_orchestrator(use_lightweight: bool = False) -> RAGOrchestrator:
    if use_lightweight:
        embedder = DeterministicHashEmbedder()
    else:
        embedder = SentenceTransformerEmbedder(EMBEDDING_MODEL_NAME)

    embedding_model = TextEmbeddingModel.from_pretrained(EMBEDDING_MODEL_NAME, embedder)
    expander = RuleBasedQueryExpander()
    generative_model = GenerativeModel.from_pretrained("mock-generative", expander)

    persist_dir = str(CHROMA_DIR) if USE_PERSISTENT_CHROMA else None
    vector_store = ChromaVectorStore(
        collection_name=CHROMA_COLLECTION,
        persist_directory=persist_dir,
    )

    retrieval_engine = RetrievalEngine(
        embedding_model=embedding_model,
        generative_model=generative_model,
        vector_store=vector_store,
    )

    return RAGOrchestrator(
        dataset_path=DATASET_PATH,
        vector_store=vector_store,
        retrieval_engine=retrieval_engine,
        embedding_model=embedding_model,
    )


app = FastAPI(title="Context-Aware Retrieval Engine", version="1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_methods=["*"],
    allow_headers=["*"],
)

orchestrator = build_orchestrator(use_lightweight=USE_LIGHTWEIGHT_EMBEDDER)


@app.on_event("startup")
def startup_event() -> None:
    orchestrator.initialize()


@app.get("/health")
def health() -> dict:
    return {"status": "ok"}


@app.post("/api/search", response_model=SearchResponse)
def search(request: SearchRequest) -> SearchResponse:
    outcome = orchestrator.search(request.query, request.strategy, request.top_k)
    return SearchResponse(
        query=outcome.query,
        strategy=outcome.strategy,
        expanded_query=outcome.expanded_query,
        results=[
            {
                "id": result.id,
                "score": result.score,
                "text": result.text,
                "metadata": result.metadata,
            }
            for result in outcome.results
        ],
    )


@app.post("/api/benchmark", response_model=BenchmarkResponse)
def benchmark(request: BenchmarkRequest) -> BenchmarkResponse:
    outcome = orchestrator.benchmark(request.queries, request.top_k, request.max_attempts)
    return BenchmarkResponse.model_validate_json(format_benchmark_json(outcome))
