## PHASE 12 — Soft Skills của Principal

_Technical knowledge cần thiết nhưng chưa đủ để lên Staff/Principal._

### 12.1 — Technical Leadership

- 🟢 RFC (Request for Comments) process — đề xuất technical changes
- 🟢 Architecture Decision Records (ADR) — document decisions và context
- 🟢 Tech debt triage — phân loại và prioritize debt
- 🟢 Cross-team technical alignment

### 12.2 — System Thinking

- 🟢 Biết khi nào không cần build — buy vs build vs open source
- 🟢 Incremental migration strategies
- 🟢 Backward compatibility planning
- 🟢 Performance budgets và monitoring

### 📚 Tài liệu — Phase 12

| Tài liệu                            | Link                                                                                | Ghi chú                            |
| ----------------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------- |
| Staff Engineer (sách) — Will Larson | https://staffeng.com/book                                                           | Định nghĩa rõ Staff/Principal role |
| staffeng.com — Stories              | https://staffeng.com/stories                                                        | Real stories từ Staff Engineers    |
| Architecture Decision Records       | https://adr.github.io                                                               | Format viết ADR                    |
| Google Engineering Practices        | https://google.github.io/eng-practices                                              | Code review, technical standards   |
| The Pragmatic Programmer (sách)     | https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition | Career-long reference              |

---

## Tổng hợp Kênh YouTube

| Kênh               | Focus                                | Link                                  |
| ------------------ | ------------------------------------ | ------------------------------------- |
| Fireship           | Concepts nhanh, technology mới       | https://youtube.com/@Fireship         |
| Jack Herrington    | React advanced, TypeScript, patterns | https://youtube.com/@jackherrington   |
| Theo (t3.gg)       | Fullstack ecosystem, opinionated     | https://youtube.com/@t3dotgg          |
| ThePrimeagen       | Performance, tư duy engineer         | https://youtube.com/@ThePrimeagen     |
| Web Dev Simplified | Giải thích concept rõ ràng           | https://youtube.com/@WebDevSimplified |
| Lydia Hallie       | JS visualized, advanced JS           | https://youtube.com/@LydiaHallie      |
| Kevin Powell       | CSS sâu                              | https://youtube.com/@KevinPowell      |
| Steve Kinney       | Performance, tooling                 | Tìm trên Frontend Masters             |

---

## Tổng hợp Sách theo mức độ ưu tiên

### Đọc ngay (free hoặc quan trọng nhất)

- **You Don't Know JS** — https://github.com/getify/You-Dont-Know-JS _(free)_
- **javascript.info** — https://javascript.info _(free)_
- **Exploring JS** — https://exploringjs.com _(free online)_
- **High Performance Browser Networking** — https://hpbn.co _(free online)_
- **Patterns.dev** — https://www.patterns.dev _(free)_

### Đọc khi lên Senior

- **Node.js Design Patterns** — Mario Casciaro _(trả phí)_
- **Clean Code** — Robert Martin _(trả phí, đọc phản biện)_
- **The Pragmatic Programmer** — Hunt & Thomas _(trả phí)_

### Đọc khi hướng tới Staff/Principal

- **Staff Engineer** — Will Larson _(trả phí)_
- **Designing Data-Intensive Applications** — Martin Kleppmann _(trả phí — backend heavy nhưng cực kỳ worth)_

---

## Thứ tự học gợi ý

```
Phase 1 (Engine) → Phase 2 (Core JS) → Phase 3 (Browser)
     ↓
Phase 4 (Performance) → Phase 7 (a11y) → Phase 8 (HTML)
     ↓
Phase 5 (APIs) → Phase 6 (Security) → Phase 9 (Node)
     ↓
Phase 10 (Architecture) → Phase 11 (Tooling) → Phase 12 (Leadership)
```

Phase 1, 2, 3 là nền tảng — học song song với nhau, mỗi concept trong Phase 1 sẽ giải thích tại sao Phase 2 hoạt động như vậy.

---

## Cách học hiệu quả nhất

**1. Không đọc docs rồi thôi**  
Mỗi concept: đọc → tự viết implementation → break nó → hiểu tại sao break.

**2. Build cùng lúc với học**  
Học Intersection Observer → implement lazy loading thật.  
Học Layout Thrashing → profile app thật → fix.

**3. Dùng DevTools liên tục**  
Performance tab cho mọi animation bạn viết.  
Memory tab khi nghĩ đến closure + large data.

**4. Đọc source code**  
React source, Lodash source, undici (Node.js HTTP client) source.  
Không cần hiểu hết — hiểu tại sao họ chọn design đó.

**5. Dạy lại**  
Viết blog, giải thích cho đồng nghiệp. Chỗ nào giải thích lúng túng = chỗ còn lỗ hổng.

---

---

## Quick Reference — Link quan trọng nhất

| Ưu tiên | Tài liệu                     | Link                                               |
| ------- | ---------------------------- | -------------------------------------------------- |
| ⭐⭐⭐  | javascript.info              | https://javascript.info                            |
| ⭐⭐⭐  | You Don't Know JS            | https://github.com/getify/You-Dont-Know-JS         |
| ⭐⭐⭐  | MDN Web Docs                 | https://developer.mozilla.org                      |
| ⭐⭐⭐  | web.dev                      | https://web.dev                                    |
| ⭐⭐⭐  | Jake Archibald — In The Loop | https://www.youtube.com/watch?v=cCOL7MC4Pl0        |
| ⭐⭐    | CSS Triggers                 | https://csstriggers.com                            |
| ⭐⭐    | OWASP Top 10                 | https://owasp.org/www-project-top-ten              |
| ⭐⭐    | ARIA APG                     | https://www.w3.org/WAI/ARIA/apg                    |
| ⭐⭐    | Patterns.dev                 | https://www.patterns.dev                           |
| ⭐⭐    | Type Challenges              | https://github.com/type-challenges/type-challenges |
| ⭐⭐    | PortSwigger Security Academy | https://portswigger.net/web-security               |
| ⭐      | V8 Blog                      | https://v8.dev/blog                                |
| ⭐      | TC39 Proposals               | https://github.com/tc39/proposals                  |
| ⭐      | staffeng.com                 | https://staffeng.com                               |

---

_Tài liệu này được thiết kế để upload lên NotebookLM. Mỗi phase có tài liệu đi kèm — học phase nào, mở tài liệu phase đó._
