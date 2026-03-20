## PHASE 4 — Performance Engineering

### 4.1 — Measuring Performance

- 🔴 Core Web Vitals: LCP, INP (thay FID từ 2024), CLS — định nghĩa và ngưỡng
- 🔴 Performance API: performance.now(), performance.mark(), performance.measure()
- 🔴 Navigation Timing API
- 🔴 Resource Timing API
- 🟡 PerformanceObserver — observe LCP, FID, CLS, long tasks
- 🟡 Long Tasks API — task > 50ms là long task
- 🟡 User Timing API — custom marks và measures
- 🟢 Real User Monitoring (RUM) patterns
- 🟢 Chrome UX Report (CrUX) data

### 4.2 — JavaScript Performance

- 🔴 Time complexity awareness trong hot paths
- 🔴 Avoiding unnecessary work: memoization, caching
- 🔴 Debounce/throttle cho frequent events
- 🔴 Code splitting: dynamic import(), route-based splitting
- 🔴 Tree shaking — side-effect-free modules
- 🟡 V8 optimization tips: monomorphic functions, stable object shapes
- 🟡 Avoiding deoptimization: không mix types trong arrays/objects
- 🟡 Web Workers — offload heavy computation khỏi main thread
- 🟡 Task scheduling: chunking long tasks với yield (scheduler.yield, setTimeout(0))
- 🟢 WASM cho performance-critical code
- 🟢 SharedArrayBuffer + Atomics cho worker communication

### 4.3 — Network Performance

- 🔴 HTTP/1.1 vs HTTP/2 vs HTTP/3 — multiplexing, head-of-line blocking
- 🔴 Caching: Cache-Control, ETag, Last-Modified
- 🔴 Service Workers — offline, cache strategies (cache-first, network-first, stale-while-revalidate)
- 🔴 Bundle size optimization: minification, compression (gzip, brotli)
- 🟡 CDN concepts — edge caching
- 🟡 Image optimization: WebP, AVIF, srcset, lazy loading
- 🟡 Font optimization: font-display, preload, subsetting
- 🟢 103 Early Hints
- 🟢 Priority Hints (fetchpriority attribute)

### 4.4 — Rendering Performance

- 🔴 Virtual scrolling / windowing — render chỉ visible items (react-window, TanStack Virtual)
- 🔴 Image lazy loading: IntersectionObserver pattern, loading="lazy"
- 🔴 Skeleton screens vs spinners — UX và performance perception
- 🟡 Server-Side Rendering (SSR) vs Static Site Generation (SSG) vs Client-Side Rendering (CSR) — trade-offs thật
- 🟡 Streaming SSR — React 18 Suspense, server components
- 🟡 Partial Hydration, Islands Architecture
- 🟢 Resumability (Qwik concept) — so sánh với hydration

### 📚 Tài liệu — Phase 4

| Tài liệu                            | Link                                                                   | Ghi chú                                    |
| ----------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------ |
| web.dev/performance                 | https://web.dev/learn/performance                                      | Core Web Vitals, LCP, INP, CLS             |
| High Performance Browser Networking | https://hpbn.co                                                        | Free online — HTTP, TCP, TLS, CDN sâu nhất |
| web.dev — Core Web Vitals           | https://web.dev/explore/learn-core-web-vitals                          | Đo và cải thiện CWV                        |
| Chrome DevTools Performance Tab     | https://developer.chrome.com/docs/devtools/performance                 | Flame chart, long tasks                    |
| web.dev — Code Splitting            | https://web.dev/articles/code-splitting-with-dynamic-imports-in-nextjs | Dynamic import patterns                    |
| Smashing Magazine — Virtual Scroll  | https://www.smashingmagazine.com/2016/03/how-to-build-a-virtual-scroll | Windowing/virtual list concept             |

---
