# Retrieval Benchmark (Strategy A vs Strategy B)

Run ID: 54aa3335-40ad-4140-b374-ca51e75284c4
Created: 2026-05-14T12:17:38.762545+00:00

## Query 1

Query: How does the system handle peak load without dropping requests?

Expanded query: How does the system handle peak load without dropping requests? autoscaling rate limit queue depth load shedding

| Strategy | Rank | Chunk ID | Score | Snippet |
|---|---|---|---|---|
| A | 1 | p1 | 0.7126 | During peak load the system absorbs sudden traffic spikes by combining horizontal autoscaling with a short-lived queue.  |
| A | 2 | p5 | 0.5625 | Peak network load is different from CPU load. When bandwidth saturates, the mitigation focuses on CDN offload, response  |
| A | 3 | p3 | 0.5158 | When downstream latency spikes, the API enforces timeouts and circuit breakers to prevent cascading failure. Backpressur |
| B | 1 | p1 | 0.8024 | During peak load the system absorbs sudden traffic spikes by combining horizontal autoscaling with a short-lived queue.  |
| B | 2 | p9 | 0.6128 | If queue backlog grows faster than workers can drain, the system raises backpressure signals and temporarily disables ex |
| B | 3 | p5 | 0.5608 | Peak network load is different from CPU load. When bandwidth saturates, the mitigation focuses on CDN offload, response  |

## Query 2

Query: What mitigates a thundering herd after cache invalidation?

Expanded query: What mitigates a thundering herd after cache invalidation? stale-while-revalidate request coalescing singleflight

| Strategy | Rank | Chunk ID | Score | Snippet |
|---|---|---|---|---|
| A | 1 | p2 | 0.6922 | Cache invalidation can cause a thundering herd when many clients miss simultaneously. The mitigation is request coalesci |
| A | 2 | p3 | 0.4366 | When downstream latency spikes, the API enforces timeouts and circuit breakers to prevent cascading failure. Backpressur |
| A | 3 | p7 | 0.4103 | Batch processors rely on idempotent writes so retries do not duplicate side effects. A dead-letter queue captures poison |
| B | 1 | p2 | 0.8177 | Cache invalidation can cause a thundering herd when many clients miss simultaneously. The mitigation is request coalesci |
| B | 2 | p3 | 0.4953 | When downstream latency spikes, the API enforces timeouts and circuit breakers to prevent cascading failure. Backpressur |
| B | 3 | p7 | 0.3952 | Batch processors rely on idempotent writes so retries do not duplicate side effects. A dead-letter queue captures poison |

## Query 3

Query: How do we prevent overload when downstream latency spikes and queues back up?

Expanded query: How do we prevent overload when downstream latency spikes and queues back up? bulkhead backpressure retries exponential

| Strategy | Rank | Chunk ID | Score | Snippet |
|---|---|---|---|---|
| A | 1 | p9 | 0.6809 | If queue backlog grows faster than workers can drain, the system raises backpressure signals and temporarily disables ex |
| A | 2 | p1 | 0.6252 | During peak load the system absorbs sudden traffic spikes by combining horizontal autoscaling with a short-lived queue.  |
| A | 3 | p3 | 0.6230 | When downstream latency spikes, the API enforces timeouts and circuit breakers to prevent cascading failure. Backpressur |
| B | 1 | p3 | 0.7674 | When downstream latency spikes, the API enforces timeouts and circuit breakers to prevent cascading failure. Backpressur |
| B | 2 | p9 | 0.6788 | If queue backlog grows faster than workers can drain, the system raises backpressure signals and temporarily disables ex |
| B | 3 | p1 | 0.6252 | During peak load the system absorbs sudden traffic spikes by combining horizontal autoscaling with a short-lived queue.  |
