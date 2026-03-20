## PHASE 8 — HTML Deep Dive

_Nhiều người bỏ qua. Senior phải biết semantic HTML và browser behavior sâu._

### 8.1 — Semantic & Structure

- 🔴 Document outline — heading hierarchy (h1-h6)
- 🔴 Sectioning elements: article, section, nav, aside, header, footer, main
- 🔴 Flow vs Phrasing vs Metadata content categories
- 🔴 Forms: fieldset, legend, label, input types, form validation API
- 🔴 Table: thead, tbody, tfoot, caption, scope attribute — cho accessible tables
- 🟡 details/summary — native disclosure widget
- 🟡 dialog element — native modal
- 🟡 popover API — native popover
- 🟢 Template element — inert DOM trees
- 🟢 Slot element — Web Components

### 8.2 — Performance & Loading

- 🔴 Script loading: async vs defer vs type="module"
- 🔴 Image: srcset, sizes, loading="lazy", decoding="async"
- 🔴 Link: rel="preload", rel="prefetch", rel="preconnect"
- 🔴 Meta viewport — responsive design foundation
- 🟡 fetchpriority attribute — LCP image optimization
- 🟡 Picture element — art direction responsive images
- 🟢 103 Early Hints header

### 8.3 — Web Components

- 🟡 Custom Elements API — define, lifecycle callbacks
- 🟡 Shadow DOM — encapsulation, ::part, ::slotted
- 🟡 HTML Templates — template element
- 🟢 Web Components trong design systems
- 🟢 Declarative Shadow DOM (SSR cho Web Components)

### 📚 Tài liệu — Phase 8

| Tài liệu                    | Link                                                             | Ghi chú                                     |
| --------------------------- | ---------------------------------------------------------------- | ------------------------------------------- |
| MDN — HTML Reference        | https://developer.mozilla.org/en-US/docs/Web/HTML                | Tra cứu element, attributes                 |
| web.dev — Learn HTML        | https://web.dev/learn/html                                       | Structured course, semantic HTML            |
| HTML Spec — WHATWG          | https://html.spec.whatwg.org                                     | Spec chính thức, dùng khi cần hiểu thật sâu |
| web.dev — Responsive Images | https://web.dev/learn/design/responsive-images                   | srcset, sizes, picture element              |
| MDN — dialog element        | https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog | Native modal                                |
| web.dev — Web Components    | https://web.dev/learn/html/template                              | Template, slot, custom elements             |

---
