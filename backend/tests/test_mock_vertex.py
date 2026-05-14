from backend.app.mock_vertex import GenerativeModel, RuleBasedQueryExpander


def test_query_expansion_adds_terms() -> None:
    expander = RuleBasedQueryExpander()
    model = GenerativeModel.from_pretrained("mock", expander)

    response = model.generate_content("How does the system handle peak load?")
    assert "autoscaling" in response.text
    assert response.text.startswith("How does the system handle peak load?")


def test_query_expansion_fallback_terms() -> None:
    expander = RuleBasedQueryExpander()
    model = GenerativeModel.from_pretrained("mock", expander)

    response = model.generate_content("Explain cold start behavior.")
    assert "semantic retrieval context" in response.text
