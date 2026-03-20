## PHASE 7 — Accessibility (a11y)

_Không phải optional. Là legal requirement ở nhiều nơi và là dấu hiệu của engineer chuyên nghiệp._

### 7.1 — Foundations

- 🔴 WCAG 2.1/2.2 — 4 principles: Perceivable, Operable, Understandable, Robust
- 🔴 Semantic HTML — dùng đúng element (button vs div, nav, main, article, section)
- 🔴 Keyboard navigation — focus management, focus trap, skip links
- 🔴 Screen reader testing — cách dùng VoiceOver (Mac), NVDA (Windows)
- 🔴 Color contrast — minimum ratios (4.5:1 normal text, 3:1 large text)
- 🔴 Alt text cho images — descriptive vs decorative

### 7.2 — ARIA

- 🔴 ARIA roles: landmark roles (main, nav, banner, contentinfo), widget roles
- 🔴 ARIA states & properties: aria-label, aria-labelledby, aria-describedby, aria-hidden
- 🔴 ARIA live regions: aria-live, aria-atomic, aria-relevant — dynamic content announcements
- 🔴 Rule 1 of ARIA: Nếu có HTML element native, dùng nó, đừng dùng ARIA
- 🟡 aria-expanded, aria-selected, aria-checked — interactive component states
- 🟡 aria-controls, aria-owns — relationships
- 🟡 Accessible name computation algorithm
- 🟢 APG (ARIA Authoring Practices Guide) patterns — modal, combobox, tabs, v.v.

### 7.3 — Focus Management

- 🔴 tabindex: 0 (natural), -1 (programmatic only), positive (avoid)
- 🔴 Focus visible — :focus-visible CSS, đừng bao giờ outline: none không có alternative
- 🔴 Modal focus trap — khi modal mở, focus phải ở trong
- 🔴 Focus restoration — khi modal đóng, trả focus về trigger element
- 🟡 Roving tabindex pattern — cho composite widgets (toolbar, menu, tabs)
- 🟢 inert attribute — làm cho subtree không thể tương tác và không thể focus

### 7.4 — Motion & Animation

- 🔴 prefers-reduced-motion media query — tôn trọng user preference
- 🔴 Không dùng animation làm conveyor thông tin quan trọng
- 🟡 WCAG 2.3.3 Animation from Interactions

### 📚 Tài liệu — Phase 7

| Tài liệu                                | Link                                | Ghi chú                                       |
| --------------------------------------- | ----------------------------------- | --------------------------------------------- |
| web.dev — Accessibility                 | https://web.dev/learn/accessibility | Đầy đủ, thực tế, từ Google                    |
| ARIA Authoring Practices Guide          | https://www.w3.org/WAI/ARIA/apg     | W3C spec — modal, tabs, combobox patterns     |
| Inclusive Components — Heydon Pickering | https://inclusive-components.design | Free, từng component phân tích sâu            |
| WebAIM                                  | https://webaim.org                  | Tutorials, color contrast checker, WAVE tool  |
| Deque University (free tier)            | https://dequeuniversity.com         | Screen reader training                        |
| axe DevTools (Chrome extension)         | https://www.deque.com/axe/devtools  | Audit accessibility tự động                   |
| WCAG 2.2                                | https://www.w3.org/TR/WCAG22        | Spec chính thức (dùng tra cứu, không đọc hết) |

---
