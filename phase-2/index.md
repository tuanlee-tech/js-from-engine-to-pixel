## PHASE 2 — JavaScript Core Language (Sâu, không bỏ qua gì)

### 2.1 — Types & Type System

- 🔴 Primitive types: undefined, null, boolean, number, bigint, string, symbol
- 🔴 typeof operator — quirks (typeof null === 'object')
- 🔴 Type coercion: implicit vs explicit, Abstract Equality (==) algorithm
- 🔴 Falsy/truthy values — tất cả các edge case
- 🔴 NaN — tại sao NaN !== NaN, Number.isNaN vs isNaN
- 🟡 Symbol — use cases thực tế: well-known symbols (Symbol.iterator, Symbol.toPrimitive)
- 🟡 BigInt — khi nào cần, limitations
- 🟢 Type branding pattern (nominal typing trong structural type system)

### 2.2 — Variables & Scoping

- 🔴 var / let / const — hoisting, TDZ (Temporal Dead Zone)
- 🔴 Function scope vs Block scope
- 🔴 Lexical scoping (static scoping) — scope xác định lúc viết code, không phải lúc chạy
- 🔴 Scope chain — lookup mechanism
- 🔴 Hoisting — function declarations vs function expressions vs var vs let/const
- 🟡 Module scope — khác global scope như thế nào
- 🟢 Eval scope — tại sao eval phá vỡ optimizations

### 2.3 — Closures

- 🔴 [[Environment]] reference
- 🔴 Lexical Environment lifecycle
- 🔴 Sharing model — khi nào share, khi nào không
- 🔴 3 loại bug: shared binding, async timing, stale closure
- 🟡 Closure-based private state vs class private fields (#) — trade-offs
- 🟡 Memory implications của closures trong hot paths

### 2.4 — Functions (mọi khía cạnh)

- 🔴 Function declaration vs expression vs arrow function — khác nhau thật sự
- 🔴 this binding: implicit, explicit (call/apply/bind), new binding, arrow (lexical this)
- 🔴 this trong event handlers, callbacks, class methods
- 🔴 arguments object vs rest parameters
- 🔴 Default parameters — evaluation timing (lazy, mỗi lần gọi)
- 🔴 Spread operator — shallow copy implications
- 🔴 Pure functions — định nghĩa thực sự, side effects
- 🟡 Function.prototype.toString() — source code retrieval
- 🟡 Tail call optimization — lý thuyết và tại sao browsers không implement
- 🟡 Generator functions — lazy evaluation, custom iterators
- 🟡 Async generators — streaming data patterns
- 🟢 Function composition patterns — compose, pipe
- 🟢 Trampolining — giải quyết stack overflow cho đệ quy sâu

### 2.5 — Prototype & Object System

- 🔴 Prototype chain — [[Prototype]], Object.getPrototypeOf
- 🔴 prototype vs **proto** vs Object.getPrototypeOf — phân biệt
- 🔴 Inheritance: prototypal vs classical, Object.create
- 🔴 Property descriptors: value, writable, enumerable, configurable
- 🔴 Object.defineProperty, Object.defineProperties
- 🔴 Getter/Setter — khi nào dùng, khi nào không
- 🔴 hasOwnProperty vs in operator vs Object.hasOwn
- 🟡 Object.freeze, Object.seal, Object.preventExtensions — khác nhau
- 🟡 Reflection API: Reflect object
- 🟡 Proxy — use cases: validation, logging, reactive systems
- 🟢 Proxy performance cost — khi nào không nên dùng
- 🟢 Metaprogramming patterns với Proxy + Reflect

### 2.6 — Classes

- 🔴 Class syntax — syntactic sugar trên prototype chain
- 🔴 Constructor, instance methods, static methods
- 🔴 Private fields (#) — thật sự private, không phải convention
- 🔴 Inheritance với extends, super — cách hoạt động thật
- 🔴 Class fields — declaration, initialization order
- 🟡 Abstract class pattern (JS không có abstract, cách simulate)
- 🟡 Mixin pattern — multiple inheritance trong JS
- 🟢 Class decorators (TC39 Stage 3)

### 2.7 — Asynchronous JavaScript (cực kỳ quan trọng)

- 🔴 Callback pattern — callback hell, error-first convention
- 🔴 Promise: states (pending/fulfilled/rejected), chaining, error propagation
- 🔴 Promise combinators: all, allSettled, race, any — khi nào dùng cái nào
- 🔴 async/await — desugaring sang Promise, error handling
- 🔴 try/catch với async/await — các edge cases
- 🔴 Unhandled promise rejection — tại sao nguy hiểm
- 🟡 Promise cancellation patterns — AbortController
- 🟡 Promise.withResolvers() (ES2024)
- 🟡 Async iteration: for-await-of, Symbol.asyncIterator
- 🟡 Concurrency control: limiting parallel requests, semaphore pattern
- 🟢 Structured concurrency concepts
- 🟢 Promise scheduling và microtask queue internals

### 2.8 — Iterators & Generators

- 🔴 Iterator protocol: next(), { value, done }
- 🔴 Iterable protocol: Symbol.iterator
- 🔴 Built-in iterables: Array, String, Map, Set, NodeList
- 🟡 Generator functions: function*, yield, yield*
- 🟡 Infinite sequences với generators
- 🟡 Generator-based async control flow (trước async/await)
- 🟢 Custom iterable data structures
- 🟢 Lazy evaluation với generators cho large datasets

### 2.9 — Modules

- 🔴 ES Modules: import/export, named vs default
- 🔴 Module scope — mỗi module là một scope riêng
- 🔴 Live bindings — exported value thay đổi, importer thấy ngay
- 🔴 Circular dependencies — cách JS xử lý, cách tránh
- 🟡 Dynamic import() — code splitting, lazy loading
- 🟡 import.meta — module metadata
- 🟡 Module resolution algorithm (Node.js)
- 🟢 ES Module in browsers — type="module", CORS implications
- 🟢 Import maps
- 🟢 Module federation (Webpack 5)

### 2.10 — Error Handling

- 🔴 Error types: Error, TypeError, RangeError, ReferenceError, SyntaxError
- 🔴 Custom error classes
- 🔴 Error boundaries (React), global error handlers
- 🔴 window.onerror vs window.addEventListener('error')
- 🔴 unhandledrejection event
- 🟡 Error cause (ES2022): new Error('msg', { cause: originalError })
- 🟡 Stack trace manipulation — Error.captureStackTrace (V8)
- 🟢 Structured error logging patterns
- 🟢 Result type pattern (thay vì throw/catch cho expected errors)

### 2.11 — Data Structures & Collections

- 🔴 Array methods đầy đủ — map, filter, reduce, flat, flatMap, findIndex, at, v.v.
- 🔴 Object methods — keys, values, entries, fromEntries, assign, spread
- 🔴 Map vs Object — khi nào dùng cái nào, key types, ordering
- 🔴 Set — deduplication, set operations pattern
- 🔴 WeakMap — private data pattern, không block GC
- 🔴 WeakSet — use cases
- 🟡 Array.from, Array.of
- 🟡 Typed Arrays — Int8Array, Float32Array, v.v. — dùng trong WebGL, audio
- 🟡 ArrayBuffer, DataView — binary data manipulation
- 🟢 SharedArrayBuffer, Atomics — shared memory giữa Workers

### 📚 Tài liệu — Phase 2

| Tài liệu                                | Link                                                                             | Ghi chú                                       |
| --------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------- |
| javascript.info                         | https://javascript.info                                                          | Đọc toàn bộ phần Core — tốt nhất cho nền tảng |
| You Don't Know JS — Scope & Closures    | https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures            | Free trên GitHub, sâu nhất về scope           |
| You Don't Know JS — this & Prototypes   | https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/objects-classes           | this binding, prototype chain                 |
| You Don't Know JS — Types & Grammar     | https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/types-grammar             | Type coercion, edge cases                     |
| You Don't Know JS — Async & Performance | https://github.com/getify/You-Dont-Know-JS/tree/1st-ed/async%20%26%20performance | Promise, generators, async patterns           |
| MDN Web Docs                            | https://developer.mozilla.org/en-US/docs/Web/JavaScript                          | Dùng như từ điển tra cứu                      |
| TC39 Proposals                          | https://github.com/tc39/proposals                                                | Theo dõi tính năng mới đang vào spec          |
| Exploring JS (Dr. Axel)                 | https://exploringjs.com                                                          | Sách free online, chi tiết về ES6+            |

---
