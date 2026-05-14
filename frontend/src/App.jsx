import { useMemo, useState } from "react";

const defaultQuery = "How does the system handle peak load without dropping requests?";

function formatScore(score) {
  if (typeof score !== "number") return "-";
  return score.toFixed(4);
}

export default function App() {
  const [query, setQuery] = useState(defaultQuery);
  const [topK, setTopK] = useState(3);
  const [expandedQuery, setExpandedQuery] = useState("");
  const [resultsA, setResultsA] = useState([]);
  const [resultsB, setResultsB] = useState([]);
  const [benchmark, setBenchmark] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const hasResults = resultsA.length || resultsB.length;

  const summary = useMemo(() => {
    if (!hasResults) return "Submit a query to compare Strategy A vs Strategy B.";
    return "Showing top chunks for both strategies.";
  }, [hasResults]);

  async function postJson(url, payload) {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const text = await response.text();
      throw new Error(text || "Request failed");
    }
    return response.json();
  }

  async function handleCompare() {
    setLoading(true);
    setError("");
    try {
      const [responseA, responseB] = await Promise.all([
        postJson("/api/search", { query, strategy: "A", top_k: topK }),
        postJson("/api/search", { query, strategy: "B", top_k: topK }),
      ]);
      setResultsA(responseA.results || []);
      setResultsB(responseB.results || []);
      setExpandedQuery(responseB.expanded_query || "");
    } catch (err) {
      setError(err.message || "Unable to fetch results");
    } finally {
      setLoading(false);
    }
  }

  async function handleBenchmark() {
    setLoading(true);
    setError("");
    try {
      const response = await postJson("/api/benchmark", { top_k: topK });
      setBenchmark(response.results || []);
    } catch (err) {
      setError(err.message || "Unable to run benchmark");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <header className="hero">
        <div>
          <p className="eyebrow">Context-Aware Retrieval Engine</p>
          <h1>Semantic RAG Benchmark Console</h1>
          <p className="subtitle">Compare raw vector search vs query expansion on live data.</p>
        </div>
        <div className="stat">
          <span>Chunks</span>
          <strong>9</strong>
          <span>Strategies</span>
          <strong>2</strong>
        </div>
      </header>

      <section className="panel">
        <div className="panel-header">
          <h2>Run a comparison</h2>
          <p>{summary}</p>
        </div>
        <div className="controls">
          <label>
            Query
            <textarea
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              rows={3}
              placeholder="Ask a complex question"
            />
          </label>
          <div className="control-row">
            <label>
              Top K
              <input
                type="number"
                min="1"
                max="10"
                value={topK}
                onChange={(event) => setTopK(Number(event.target.value))}
              />
            </label>
            <button className="primary" onClick={handleCompare} disabled={loading}>
              {loading ? "Running..." : "Compare A vs B"}
            </button>
            <button className="ghost" onClick={handleBenchmark} disabled={loading}>
              Run full benchmark
            </button>
          </div>
        </div>
        {error && <div className="error">{error}</div>}
      </section>

      <section className="grid">
        <div className="card">
          <div className="card-header">
            <h3>Strategy A</h3>
            <span>Raw embeddings</span>
          </div>
          <ul>
            {resultsA.map((item) => (
              <li key={item.id}>
                <div className="meta">
                  <span>{item.metadata?.title || item.id}</span>
                  <span className="score">{formatScore(item.score)}</span>
                </div>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <div className="card-header">
            <h3>Strategy B</h3>
            <span>Query expansion</span>
          </div>
          {expandedQuery && (
            <p className="expanded">Expanded: {expandedQuery}</p>
          )}
          <ul>
            {resultsB.map((item) => (
              <li key={item.id}>
                <div className="meta">
                  <span>{item.metadata?.title || item.id}</span>
                  <span className="score">{formatScore(item.score)}</span>
                </div>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {benchmark.length > 0 && (
        <section className="panel">
          <div className="panel-header">
            <h2>Benchmark results</h2>
            <p>Default evaluation set (3 queries)</p>
          </div>
          <div className="benchmark">
            {benchmark.map((entry, index) => (
              <div className="benchmark-card" key={index}>
                <h4>Query {index + 1}</h4>
                <p className="benchmark-query">{entry.query}</p>
                <p className="expanded">Expanded: {entry.expanded_query}</p>
                <div className="benchmark-grid">
                  <div>
                    <h5>Strategy A</h5>
                    <ol>
                      {entry.strategy_a.map((item) => (
                        <li key={item.id}>{item.metadata?.title || item.id}</li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h5>Strategy B</h5>
                    <ol>
                      {entry.strategy_b.map((item) => (
                        <li key={item.id}>{item.metadata?.title || item.id}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
