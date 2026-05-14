from pathlib import Path

from backend.app.embeddings import DeterministicHashEmbedder
from backend.app.mock_vertex import GenerativeModel, RuleBasedQueryExpander, TextEmbeddingModel
from backend.app.orchestrator import RAGOrchestrator
from backend.app.retrieval import RetrievalEngine
from backend.app.vector_store import ChromaVectorStore


def build_orchestrator(tmp_path: Path) -> RAGOrchestrator:
    embedder = DeterministicHashEmbedder(dim=64)
    embedding_model = TextEmbeddingModel.from_pretrained("mock", embedder)
    expander = RuleBasedQueryExpander()
    generative_model = GenerativeModel.from_pretrained("mock", expander)
    vector_store = ChromaVectorStore(collection_name="bench", persist_directory=str(tmp_path))
    engine = RetrievalEngine(embedding_model, generative_model, vector_store)
    dataset_path = tmp_path / "dataset.json"

    dataset_path.write_text(
        "["
        "{\"id\":\"t1\",\"title\":\"Peak load\",\"text\":\"Autoscaling handles traffic spikes.\",\"tags\":[\"autoscaling\"]},"
        "{\"id\":\"t2\",\"title\":\"Caching\",\"text\":\"Thundering herd mitigated by stale-while-revalidate.\",\"tags\":[\"cache\"]},"
        "{\"id\":\"t3\",\"title\":\"Backpressure\",\"text\":\"Backpressure controls queue backlog.\",\"tags\":[\"queue\"]}"
        "]",
        encoding="utf-8",
    )

    orchestrator = RAGOrchestrator(
        dataset_path=dataset_path,
        vector_store=vector_store,
        retrieval_engine=engine,
        embedding_model=embedding_model,
    )
    orchestrator.initialize()
    return orchestrator


def test_benchmark_runs(tmp_path: Path) -> None:
    orchestrator = build_orchestrator(tmp_path)
    outcome = orchestrator.benchmark(
        queries=["How do we handle peak load?"],
        top_k=2,
        max_attempts=2,
    )

    assert outcome.attempts >= 1
    assert len(outcome.results) == 1
    assert len(outcome.results[0].strategy_a) == 2
    assert len(outcome.results[0].strategy_b) == 2
