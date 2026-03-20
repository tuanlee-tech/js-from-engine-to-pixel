# JavaScript Fullstack — Roadmap Senior+ / Staff / Principal

**Mục tiêu:** Không có lỗ hổng. Hiểu sâu từ engine tới pixel.  
**Quy ước:**

- 🔴 **PHẢI BIẾT** — Không có là thiếu nền tảng
- 🟡 **NÊN BIẾT** — Senior thường có, giúp debug và design tốt hơn
- 🟢 **BIẾT THÊM LÀ TỐT** — Staff/Principal territory, competitive advantage

---

## PHASE 0 — Tư duy trước khi học

Học lại từ đầu không có nghĩa là học chậm lại. Có nghĩa là lần này học đúng chiều:

> Đừng học syntax. Học **tại sao** syntax đó tồn tại.  
> Đừng học API. Học **vấn đề** API đó giải quyết.  
> Đừng học pattern. Học **trade-off** của pattern đó.

Mỗi concept học xong phải trả lời được 3 câu:

1. Cơ chế thật là gì? (không phải định nghĩa, là cơ chế)
2. Nó giải quyết vấn đề gì?
3. Khi nào KHÔNG nên dùng?

---

## LỊCH SỬ PHÁT TRIỂN — ECMAScript Versions

_Hiểu feature nào ra đời khi nào giúp bạn biết tại sao nó được thiết kế như vậy, và tại sao code cũ viết khác code mới._

---

### ES1 — ES3 (1997–1999) — Nền móng

Giai đoạn JavaScript còn là ngôn ngữ đơn giản cho browser scripting. Hầu hết concepts cơ bản được đặt nền ở đây.

- `var`, function, prototype chain, closure (cơ chế đã có từ đây)
- `try/catch`, `typeof`, `instanceof`
- `Array`, `String`, `Math` built-ins cơ bản
- Coercion rules, `==` abstract equality algorithm

> Tại sao quan trọng: Nhiều quirks của JS (typeof null === 'object', var hoisting) đến từ giai đoạn này. Hiểu lịch sử = hiểu tại sao không fix được.

---

### ES4 (bị huỷ) — Bài học về committee

ES4 bị huỷ vì quá tham vọng — thêm static typing, class, namespace. Không đạt được đồng thuận giữa các bên (Microsoft, Mozilla, Adobe). Dẫn tới ES3.1 → sau này thành ES5.

> Tại sao quan trọng: Giải thích tại sao JS đi con đường "gradual enhancement" thay vì redesign mạnh.

---

### ES5 (2009) — Strict mode & Object control

Bước ngoặt đầu tiên sau 10 năm. Browser support: IE9+, tất cả modern browsers.

| Feature                                     | Ghi chú                                                  |
| ------------------------------------------- | -------------------------------------------------------- |
| `'use strict'`                              | Bật strict mode, bắt silent errors                       |
| `Object.create()`                           | Prototypal inheritance rõ ràng hơn                       |
| `Object.defineProperty()`                   | Property descriptors: writable, enumerable, configurable |
| `Object.freeze()`, `Object.seal()`          | Immutability cơ bản                                      |
| `Object.keys()`, `Object.values()`          | Iterate object                                           |
| `Array.isArray()`                           | Fix typeof [] === 'object'                               |
| `Array.prototype.forEach/map/filter/reduce` | Functional array methods                                 |
| `JSON.parse()`, `JSON.stringify()`          | Native JSON support                                      |
| `Function.prototype.bind()`                 | Explicit this binding                                    |
| `getter/setter`                             | Accessor properties                                      |

> Codebase cũ dùng nhiều `.bind(this)` và `'use strict'` — đây là lý do tại sao.

---

### ES6 / ES2015 — Cuộc cách mạng lớn nhất

Phiên bản thay đổi JS nhiều nhất. Hầu hết "modern JS" bắt đầu từ đây. Mất 6 năm để ra (2009→2015) vì scope quá lớn. Từ ES6 trở đi TC39 chuyển sang release hàng năm để tránh lặp lại.

| Feature                                            | Giải quyết vấn đề gì                       |
| -------------------------------------------------- | ------------------------------------------ |
| `let`, `const`                                     | Fix var hoisting bug, tạo block scope      |
| Arrow functions `=>`                               | Fix this binding trong callback            |
| Template literals `` ` ``                          | Fix string concatenation hell              |
| Destructuring `{ a, b } = obj`                     | Unpack object/array gọn hơn                |
| Default parameters                                 | Thay thế `arg = arg \|\| default` pattern  |
| Rest `...args` / Spread `...arr`                   | Variadic functions, shallow copy           |
| Classes                                            | Syntax rõ ràng hơn cho prototype-based OOP |
| Modules `import/export`                            | Thay thế CommonJS/AMD/IIFE module patterns |
| Promises                                           | Fix callback hell                          |
| Generators `function*`                             | Lazy evaluation, async control flow        |
| `Symbol`                                           | Unique keys, well-known symbols            |
| `Map`, `Set`, `WeakMap`, `WeakSet`                 | Proper data structures                     |
| `for...of`                                         | Iterate bất kỳ iterable                    |
| `Proxy`, `Reflect`                                 | Metaprogramming                            |
| `Array.from()`, `Array.find()`, `Array.includes()` | Array helpers                              |
| `Object.assign()`                                  | Shallow merge/clone                        |
| `String.prototype.includes/startsWith/endsWith`    | String helpers                             |
| `Promise`                                          | Async programming                          |

> ES6 là lý do tại sao Babel ra đời — transpile ES6 xuống ES5 cho browser cũ.

---

### ES2016 (ES7) — Nhỏ nhưng quan trọng

TC39 bắt đầu release nhỏ hàng năm từ đây.

| Feature                      | Ghi chú                             |
| ---------------------------- | ----------------------------------- |
| `Array.prototype.includes()` | Thay thế `indexOf !== -1`           |
| Exponentiation operator `**` | `2 ** 10` thay vì `Math.pow(2, 10)` |

---

### ES2017 (ES8) — Async/Await ra đời

| Feature                               | Ghi chú                                        |
| ------------------------------------- | ---------------------------------------------- |
| `async/await`                         | Syntax sugar trên Promise — game changer       |
| `Object.entries()`, `Object.values()` | Iterate object như array                       |
| `String.prototype.padStart/padEnd`    | String formatting                              |
| `Object.getOwnPropertyDescriptors()`  | Deep copy với descriptors                      |
| Trailing commas trong function params | Minor syntax                                   |
| `SharedArrayBuffer`, `Atomics`        | Multi-threaded memory (bị disable sau Spectre) |

> async/await là lý do 90% code async hiện đại viết theo style này thay vì `.then()` chain.

---

### ES2018 (ES9) — Async iteration & Rest/Spread cho Object

| Feature                          | Ghi chú                                         |
| -------------------------------- | ----------------------------------------------- |
| Async iteration `for await...of` | Iterate async sources (streams, paginated APIs) |
| Async generators                 | Kết hợp generator + async                       |
| Object rest/spread `{ ...obj }`  | Trước chỉ có array spread, giờ có object spread |
| `Promise.finally()`              | Cleanup sau promise dù resolve hay reject       |
| Named capture groups trong Regex | `(?<year>\d{4})`                                |
| `s` (dotAll) flag trong Regex    | `.` match cả newline                            |

---

### ES2019 (ES10)

| Feature                                | Ghi chú                                |
| -------------------------------------- | -------------------------------------- |
| `Array.prototype.flat()`, `flatMap()`  | Flatten nested arrays                  |
| `Object.fromEntries()`                 | Ngược lại của `Object.entries()`       |
| `String.prototype.trimStart/trimEnd()` | Trim một phía                          |
| Optional catch binding                 | `catch` không cần `(e)` nếu không dùng |
| `Array.prototype.sort()` stable sort   | Spec yêu cầu stable sort               |
| `Function.prototype.toString()` rework | Trả về source code chính xác hơn       |

---

### ES2020 (ES11) — Một trong những release quan trọng

| Feature                             | Ghi chú                                                 |
| ----------------------------------- | ------------------------------------------------------- |
| Optional chaining `?.`              | `obj?.a?.b` thay vì `obj && obj.a && obj.a.b`           |
| Nullish coalescing `??`             | `a ?? b` — chỉ fallback khi null/undefined, khác `\|\|` |
| `BigInt`                            | Số nguyên lớn hơn `Number.MAX_SAFE_INTEGER`             |
| `Promise.allSettled()`              | Chờ tất cả, không reject khi có 1 cái fail              |
| `globalThis`                        | Unified global object (window/global/self)              |
| Dynamic `import()`                  | Lazy loading modules                                    |
| `String.prototype.matchAll()`       | Tất cả regex matches                                    |
| Nullish coalescing assignment `??=` |                                                         |

> `?.` và `??` giải quyết 2 pain point lớn nhất của JS — code cũ không có 2 cái này phải viết rất dài.

---

### ES2021 (ES12)

| Feature                                  | Ghi chú                                                |
| ---------------------------------------- | ------------------------------------------------------ |
| `String.prototype.replaceAll()`          | Thay thế tất cả, không cần regex `/g`                  |
| `Promise.any()`                          | Resolve khi có 1 cái resolve, reject khi tất cả reject |
| Logical assignment `&&=`, `\|\|=`, `??=` | Shorthand assignment kết hợp logic                     |
| Numeric separators `1_000_000`           | Dễ đọc số lớn                                          |
| WeakRef, FinalizationRegistry            | Weak references, GC callbacks                          |

---

### ES2022 (ES13)

| Feature                                    | Ghi chú                                      |
| ------------------------------------------ | -------------------------------------------- |
| Class fields (public & private `#`)        | Trước phải dùng closure hoặc WeakMap         |
| Static class fields & methods              | `static #count = 0`                          |
| `Array.prototype.at()`                     | `arr.at(-1)` thay vì `arr[arr.length - 1]`   |
| `Object.hasOwn()`                          | Thay thế `hasOwnProperty` an toàn hơn        |
| `Error.cause`                              | `new Error('msg', { cause: originalError })` |
| Top-level `await`                          | `await` ngoài async function (trong module)  |
| `Array.prototype.findLast/findLastIndex()` | Tìm từ cuối mảng                             |

---

### ES2023 (ES14)

| Feature                                           | Ghi chú                             |
| ------------------------------------------------- | ----------------------------------- |
| `Array.prototype.toSorted/toReversed/toSpliced()` | Non-mutating versions               |
| `Array.prototype.with()`                          | Non-mutating index replacement      |
| `Array.findLast/findLastIndex()`                  | (chính thức, có trong ES2022 draft) |
| Hashbang grammar `#!`                             | Shebang cho Node.js scripts         |
| WeakMap với Symbol keys                           |                                     |

---

### ES2024 (ES15)

| Feature                                   | Ghi chú                                            |
| ----------------------------------------- | -------------------------------------------------- |
| `Promise.withResolvers()`                 | Expose resolve/reject ra ngoài Promise constructor |
| `Object.groupBy()`, `Map.groupBy()`       | Group array items theo key                         |
| `ArrayBuffer.prototype.resize/transfer()` | Resizable buffers                                  |
| RegExp `/v` flag                          | Unicode set notation                               |
| `String.prototype.isWellFormed()`         | Check/fix lone surrogates                          |

---

### Stage 3 đang chờ vào spec (sắp có)

Theo dõi tại: https://github.com/tc39/proposals

| Proposal                               | Tình trạng                                       |
| -------------------------------------- | ------------------------------------------------ |
| Decorators                             | Stage 3 — đã implement trong TypeScript/Babel    |
| `Iterator.prototype` methods           | Stage 3 — `.map/.filter` trực tiếp trên iterator |
| `Array.fromAsync()`                    | Stage 3                                          |
| Temporal API                           | Stage 3 — thay thế `Date` object                 |
| `Explicit Resource Management` `using` | Stage 3                                          |

> **Temporal** là thay đổi lớn nhất sắp tới — `Date` object hiện tại nổi tiếng là broken, Temporal fix toàn bộ.

---

### Tóm tắt: Feature nào từ version nào

```
var, closure, prototype          →  ES1-ES3 (1997-1999)
strict mode, Object.create       →  ES5     (2009)
let/const, arrow fn, class,
Promise, module, Map/Set         →  ES6     (2015)  ← quan trọng nhất
async/await                      →  ES2017
Object spread, async iteration   →  ES2018
flat, flatMap, fromEntries       →  ES2019
optional chaining ?., ??         →  ES2020  ← quan trọng thứ 2
replaceAll, Promise.any          →  ES2021
class private #, Array.at()      →  ES2022
toSorted, toReversed (immutable) →  ES2023
Promise.withResolvers, groupBy   →  ES2024
Decorators, Temporal             →  Sắp tới
```

---

### Tại sao cần biết điều này khi học

Khi gặp một pattern lạ trong codebase cũ, biết version history giúp bạn hiểu ngay: đây là workaround của thời chưa có feature X, không phải best practice. Ví dụ:

```javascript
// Codebase 2014 — trước ES6
var self = this; // workaround cho this binding
setTimeout(function () {
  self.doSomething();
}, 100);

// Sau ES6 — arrow function fix this
setTimeout(() => {
  this.doSomething();
}, 100);

// Codebase 2019 — trước optional chaining
var name = user && user.profile && user.profile.name;

// Sau ES2020
var name = user?.profile?.name;
```

---

## PHASE 1 — JavaScript Engine & Runtime Internals

_Nền tảng của mọi thứ. Không có phần này, mọi kiến thức sau đều là học thuộc lòng._

### 1.1 — How JS Engine Works

- 🔴 Parsing → AST → Bytecode → JIT Compilation
- 🔴 V8 pipeline: Ignition (interpreter) → TurboFan (optimizing compiler)
- 🔴 Hidden Classes & Inline Caches — tại sao thứ tự property quan trọng
- 🟡 Deoptimization — khi nào V8 "bail out" khỏi optimized code
- 🟢 Speculative optimization, Maglev (V8 mid-tier compiler)
- 🟢 SpiderMonkey (Firefox), JavaScriptCore (Safari) — so sánh engines

### 1.2 — Memory Model

- 🔴 Stack vs Heap — cái gì nằm ở đâu
- 🔴 Call Stack — Execution Context, stack frames
- 🔴 Heap — object allocation, reference types
- 🔴 Garbage Collection: Mark & Sweep algorithm
- 🟡 Generational GC: Young Generation (Scavenger) vs Old Generation (Major GC)
- 🟡 Memory leak patterns: detached DOM nodes, forgotten timers, closures giữ large data
- 🟡 WeakRef và FinalizationRegistry — khi nào dùng
- 🟢 GC tuning, heap snapshots, memory profiling trong DevTools

### 1.3 — Event Loop (PHẢI hiểu thật sâu)

- 🔴 Call Stack, Web APIs, Callback Queue, Microtask Queue
- 🔴 Thứ tự ưu tiên: Call Stack → Microtasks → Macrotasks
- 🔴 Tại sao Promise callbacks chạy trước setTimeout
- 🔴 requestAnimationFrame — nằm ở đâu trong event loop
- 🟡 queueMicrotask() API
- 🟡 Scheduler API (navigator.scheduling.isInputPending)
- 🟢 Worker event loops — khác main thread như thế nào
- 🟢 Node.js event loop phases (timers, I/O, idle, poll, check, close)

### 📚 Tài liệu — Phase 1

| Tài liệu                             | Link                                                                      | Ghi chú                                    |
| ------------------------------------ | ------------------------------------------------------------------------- | ------------------------------------------ |
| javascript.info — Advanced Functions | https://javascript.info/advanced-functions                                | Execution context, closure, scope chain    |
| Jake Archibald — In The Loop (video) | https://www.youtube.com/watch?v=cCOL7MC4Pl0                               | Video tốt nhất về Event Loop, có animation |
| Lydia Hallie — JS Visualized Series  | https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif          | GIF animation minh hoạ từng bước           |
| V8 Blog — Hidden Classes             | https://v8.dev/blog/fast-properties                                       | Tại sao object shape quan trọng            |
| V8 Blog — Ignition & TurboFan        | https://v8.dev/blog/ignition-interpreter                                  | Pipeline của V8 engine                     |
| MDN — Memory Management              | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management | GC, memory leaks                           |

---
