from pathlib import Path
import os

BACKEND_ROOT = Path(__file__).resolve().parents[1]
PROJECT_ROOT = BACKEND_ROOT.parent
DATASET_PATH = BACKEND_ROOT / "data" / "paragraphs.json"
CHROMA_DIR = BACKEND_ROOT / "chroma"
CHROMA_COLLECTION = os.getenv("CHROMA_COLLECTION", "rag_chunks")
EMBEDDING_MODEL_NAME = os.getenv(
    "EMBEDDING_MODEL_NAME",
    "sentence-transformers/all-MiniLM-L6-v2",
)
USE_PERSISTENT_CHROMA = os.getenv("USE_PERSISTENT_CHROMA", "true").lower() == "true"
USE_LIGHTWEIGHT_EMBEDDER = os.getenv("USE_LIGHTWEIGHT_EMBEDDER", "false").lower() == "true"
ALLOWED_ORIGINS = os.getenv(
    "ALLOWED_ORIGINS",
    "http://localhost:5173,http://127.0.0.1:5173",
).split(",")
