## PHASE 5 — Browser APIs

### 5.1 — Storage

- 🔴 localStorage / sessionStorage — synchronous, blocks main thread, size limits
- 🔴 IndexedDB — async, large data, structured queries
- 🔴 Cookies — attributes: HttpOnly, Secure, SameSite, Path, Expires
- 🔴 Cache API (Service Worker cache)
- 🟡 Storage Quotas và eviction policies
- 🟡 StorageManager API — estimate storage usage
- 🟢 OPFS (Origin Private File System) — high-performance local file access

### 5.2 — Networking APIs

- 🔴 fetch API — options, headers, body, response methods
- 🔴 AbortController — cancel fetch requests
- 🔴 CORS — preflight, credentials, tại sao tồn tại
- 🔴 WebSocket — full-duplex, use cases
- 🔴 Server-Sent Events (SSE) — one-way streaming từ server
- 🟡 Streams API: ReadableStream, WritableStream, TransformStream
- 🟡 fetch streaming — xử lý large responses
- 🟢 WebTransport — HTTP/3 based, low-latency
- 🟢 WebRTC — peer-to-peer, use cases

### 5.3 — Workers

- 🔴 Web Workers — dedicated workers, communication qua postMessage
- 🔴 Transferable objects — ArrayBuffer transfer, zero-copy
- 🟡 SharedArrayBuffer + Atomics — shared memory
- 🟡 Service Workers — lifecycle (install, activate, fetch), cache strategies
- 🟡 Worklets: Audio Worklet, Paint Worklet
- 🟢 Worker pools pattern
- 🟢 Comlink library — RPC over postMessage

### 5.4 — Other Important APIs

- 🔴 History API: pushState, replaceState, popstate — SPA routing
- 🔴 URL API: new URL(), URLSearchParams
- 🔴 Clipboard API
- 🔴 Geolocation API
- 🟡 Broadcast Channel API — communication giữa tabs cùng origin
- 🟡 Notification API
- 🟡 Permissions API
- 🟡 Screen Wake Lock API
- 🟡 Web Share API
- 🟢 File System Access API
- 🟢 Compression Streams API

### 📚 Tài liệu — Phase 5

| Tài liệu                  | Link                                                             | Ghi chú                            |
| ------------------------- | ---------------------------------------------------------------- | ---------------------------------- |
| MDN — Fetch API           | https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API       | fetch, AbortController, streams    |
| MDN — Web Storage         | https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API | localStorage, sessionStorage       |
| MDN — IndexedDB           | https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API   | Large data storage                 |
| web.dev — Service Workers | https://web.dev/learn/pwa/service-workers                        | Lifecycle, cache strategies        |
| MDN — Web Workers         | https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API | Workers, postMessage, Transferable |
| Streams — web.dev         | https://web.dev/articles/streams                                 | ReadableStream, WritableStream     |
