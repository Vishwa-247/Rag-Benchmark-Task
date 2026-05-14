from __future__ import annotations

import json
from pathlib import Path


def load_paragraphs(path: Path) -> list[dict]:
    with path.open("r", encoding="utf-8") as handle:
        data = json.load(handle)
    if not isinstance(data, list):
        raise ValueError("Dataset must be a list of paragraph objects.")
    return data
