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
    vector_store = ChromaVectorStore(collection_name="test", persist_directory=str(tmp_path))
    engine = RetrievalEngine(embedding_model, generative_model, vector_store)
    dataset_path = tmp_path / "dataset.json"

    dataset_path.write_text(
        "["
        "{\"id\":\"t1\",\"title\":\"Peak load\",\"text\":\"Autoscaling handles traffic spikes.\",\"tags\":[\"autoscaling\"]},"
        "{\"id\":\"t2\",\"title\":\"Caching\",\"text\":\"Thundering herd mitigated by stale-while-revalidate.\",\"tags\":[\"cache\"]}"
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


def test_strategy_a_and_b_return_results(tmp_path: Path) -> None:
    orchestrator = build_orchestrator(tmp_path)

    outcome_a = orchestrator.search("How to handle peak load?", "A", 2)
    outcome_b = orchestrator.search("How to handle peak load?", "B", 2)

    assert len(outcome_a.results) == 2
    assert len(outcome_b.results) == 2
    assert outcome_b.expanded_query is not None
