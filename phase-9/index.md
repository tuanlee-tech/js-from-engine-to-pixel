## PHASE 9 — Node.js & Fullstack

### 9.1 — Node.js Internals

- 🔴 libuv — event loop phases trong Node.js context
- 🔴 Streams — Readable, Writable, Duplex, Transform
- 🔴 Buffer — binary data handling
- 🔴 Cluster module — multi-process cho multi-core
- 🟡 worker_threads — true parallelism trong Node
- 🟡 process.nextTick vs setImmediate vs Promise.resolve — ordering
- 🟢 N-API / Node-API — native addons

### 9.2 — HTTP & APIs

- 🔴 REST principles — resource design, HTTP methods, status codes
- 🔴 HTTP headers sâu — Cache-Control, ETag, Vary, Content-Type
- 🔴 GraphQL — queries, mutations, subscriptions, N+1 problem
- 🔴 Authentication middleware patterns
- 🟡 gRPC — use cases, so sánh với REST
- 🟡 tRPC — type-safe APIs
- 🟡 Rate limiting strategies
- 🟢 API versioning strategies
- 🟢 OpenAPI/Swagger specification

### 9.3 — Databases (JS ecosystem context)

- 🔴 SQL fundamentals — JOIN, index, transaction, ACID
- 🔴 Query optimization — EXPLAIN, index design
- 🔴 ORM patterns — Prisma, Drizzle — N+1 awareness
- 🔴 Connection pooling
- 🟡 NoSQL: MongoDB patterns, khi nào phù hợp
- 🟡 Redis — caching, pub/sub, session storage
- 🟢 Database migrations strategy

### 📚 Tài liệu — Phase 9

| Tài liệu                       | Link                                              | Ghi chú                                  |
| ------------------------------ | ------------------------------------------------- | ---------------------------------------- |
| Node.js Official Docs          | https://nodejs.org/en/docs                        | Guides phần Event Loop rất tốt           |
| Node.js Design Patterns (sách) | https://www.nodejsdesignpatterns.com              | Trả phí — tốt nhất cho Node architecture |
| Node.js Best Practices         | https://github.com/goldbergyoni/nodebestpractices | Free GitHub repo, production-grade tips  |
| Prisma Docs                    | https://www.prisma.io/docs                        | ORM hiện đại nhất cho Node               |
| tRPC Docs                      | https://trpc.io/docs                              | Type-safe API layer                      |
| Redis Docs                     | https://redis.io/docs                             | Caching, pub/sub patterns                |
| The Art of PostgreSQL (sách)   | https://theartofpostgresql.com                    | SQL nâng cao cho developers              |

---
