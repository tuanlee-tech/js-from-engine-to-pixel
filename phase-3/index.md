## PHASE 3 — Browser Internals & Rendering

_Đây là thứ phân biệt frontend engineer giỏi với người bình thường._

### 3.1 — How Browser Works

- 🔴 Navigation flow: DNS → TCP → TLS → HTTP → HTML parsing
- 🔴 Critical Rendering Path: HTML→DOM, CSS→CSSOM, DOM+CSSOM→Render Tree→Layout→Paint→Composite
- 🔴 Parser blocking vs async vs defer scripts
- 🔴 Resource hints: preload, prefetch, preconnect, dns-prefetch
- 🟡 Prerender, speculation rules API
- 🟡 Back/Forward Cache (bfcache) — tại sao unload event phá vỡ nó
- 🟢 Browser process architecture: Browser process, Renderer process, GPU process, Network process
- 🟢 Site isolation — security model

### 3.2 — DOM (Document Object Model)

- 🔴 DOM tree structure — Node types (Element, Text, Comment, DocumentFragment)
- 🔴 DOM traversal: parentNode, children, querySelector, querySelectorAll
- 🔴 DOM manipulation: createElement, appendChild, insertBefore, replaceChild, removeChild
- 🔴 innerHTML vs textContent vs innerText — khác nhau và security implications
- 🔴 DocumentFragment — batch DOM operations
- 🔴 DOM diffing — concept cơ bản của Virtual DOM
- 🟡 MutationObserver — watch DOM changes
- 🟡 ResizeObserver — element size changes
- 🟡 IntersectionObserver — viewport intersection (lazy loading, infinite scroll)
- 🟢 DOM parsing và serialization: DOMParser, XMLSerializer

### 3.3 — Events (sâu)

- 🔴 Event propagation: capture phase → target phase → bubble phase
- 🔴 addEventListener options: capture, once, passive
- 🔴 Event delegation pattern — tại sao hiệu quả hơn
- 🔴 stopPropagation vs stopImmediatePropagation vs preventDefault
- 🔴 Custom events: CustomEvent, dispatchEvent
- 🟡 Pointer events vs Mouse events vs Touch events
- 🟡 Keyboard events — keydown, keyup, keypress (deprecated), compositionstart/end (IME)
- 🟡 passive event listeners — tại sao scroll performance phụ thuộc vào đây
- 🟢 Input events vs Change events — timing khác nhau
- 🟢 Event loop và event dispatch ordering

### 3.4 — Pixel Pipeline (CRITICAL cho performance)

Đây là lý do tại sao một số animation mượt, một số giật.

```
JavaScript → Style → Layout → Paint → Composite
```

- 🔴 **Layout (Reflow):** Thay đổi geometry (width, height, top, left) → browser tính toán lại vị trí tất cả elements. **Đắt nhất.**
- 🔴 **Paint:** Thay đổi visual (color, background, shadow) → browser vẽ lại pixels. Đắt.
- 🔴 **Composite:** Thay đổi transform, opacity → chỉ move/blend các layers đã paint. **Rẻ nhất.**
- 🔴 Properties chỉ trigger composite: `transform`, `opacity` — đây là lý do dùng chúng cho animation
- 🔴 Properties trigger layout: width, height, top, left, padding, margin, font-size, v.v.
- 🔴 Layout thrashing — đọc và ghi DOM xen kẽ trong loop, mỗi đọc force reflow
- 🔴 will-change CSS property — tạo compositing layer, trade-off memory vs performance
- 🟡 CSS containment: contain property — isolate layout/paint scope
- 🟡 content-visibility: auto — skip rendering off-screen content
- 🟡 Layer promotion — tại sao không nên promote mọi thứ
- 🟢 Chrome Layers panel — debug compositing
- 🟢 GPU memory budget — quá nhiều layers là vấn đề

**Layout Thrashing Example (phải thuộc):**

```javascript
// BUG: thrashing — đọc/ghi xen kẽ, mỗi đọc force reflow
elements.forEach((el) => {
  const height = el.offsetHeight; // ĐỌC → force reflow
  el.style.height = height * 2 + 'px'; // GHI
  // Vòng lặp tiếp theo đọc lại → force reflow lần nữa
});

// FIX: đọc hết rồi ghi hết
const heights = elements.map((el) => el.offsetHeight); // Đọc tất cả
elements.forEach((el, i) => {
  el.style.height = heights[i] * 2 + 'px'; // Ghi tất cả
});

// FIX tốt hơn: dùng requestAnimationFrame
function updateHeights() {
  const heights = elements.map((el) => el.offsetHeight);
  requestAnimationFrame(() => {
    elements.forEach((el, i) => {
      el.style.height = heights[i] * 2 + 'px';
    });
  });
}
```

### 3.5 — requestAnimationFrame & Animation

- 🔴 rAF callback timing — chạy trước mỗi frame repaint (~16.67ms ở 60fps)
- 🔴 rAF vs setTimeout(fn, 0) — tại sao rAF tốt hơn cho animation
- 🔴 cancelAnimationFrame
- 🔴 CSS Animations vs JS Animations — khi nào dùng cái nào
- 🔴 Web Animations API (WAAPI) — programmatic animations với browser-native performance
- 🟡 Animation loop pattern — delta time, frame-rate independent animation
- 🟡 requestIdleCallback — tasks trong idle time
- 🟡 Chrome DevTools Performance panel — frame analysis
- 🟢 OffscreenCanvas cho heavy canvas work trong Worker

### 3.6 — CSS & JS Interaction

- 🔴 getComputedStyle — đọc resolved styles
- 🔴 getBoundingClientRect — element position, dimensions, trigger reflow
- 🔴 offsetWidth/Height vs clientWidth/Height vs scrollWidth/Height — khác nhau
- 🔴 CSS Custom Properties (variables) đọc/ghi từ JS
- 🟡 CSS Houdini: Paint Worklet, Layout API, Animation Worklet
- 🟡 CSS typed OM (CSSStyleValue, CSS.px(), v.v.)
- 🟢 Stylesheet manipulation: CSSStyleSheet API

### 📚 Tài liệu — Phase 3

| Tài liệu                           | Link                                                              | Ghi chú                                         |
| ---------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------- |
| How Browsers Work — Tali Garsiel   | https://web.dev/articles/howbrowserswork                          | Bài viết đầy đủ nhất về browser internals       |
| web.dev — Critical Rendering Path  | https://web.dev/learn/performance/understanding-the-critical-path | CRP đầy đủ từ Google                            |
| CSS Triggers                       | https://csstriggers.com                                           | Tra property nào trigger layout/paint/composite |
| Chrome DevTools Docs               | https://developer.chrome.com/docs/devtools                        | Học DevTools như một tool riêng                 |
| Paul Lewis — Rendering Performance | https://web.dev/explore/fast                                      | Layout thrashing, rAF, layer promotion          |
| Jake Archibald — Rendering (video) | https://www.youtube.com/watch?v=SmE4OwHztCc                       | Pixel pipeline visualized                       |
| MDN — MutationObserver             | https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver | DOM observation APIs                            |

---
