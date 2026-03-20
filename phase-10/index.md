## PHASE 10 — Software Design & Architecture

_Đây là thứ phân biệt Senior với Staff/Principal._

### 10.1 — Design Principles

- 🔴 SOLID principles — áp dụng trong JS/TS
- 🔴 DRY, YAGNI, KISS — biết khi nào vi phạm là đúng
- 🔴 Composition over inheritance
- 🔴 Separation of concerns
- 🔴 Single source of truth

### 10.2 — Design Patterns

- 🔴 Creational: Factory, Builder, Singleton (và tại sao Singleton thường là bad idea)
- 🔴 Structural: Adapter, Proxy, Decorator, Facade
- 🔴 Behavioral: Observer, Strategy, Command, Iterator, State
- 🟡 Functional patterns: Functor, Monad (concept, không cần Haskell)
- 🟢 Enterprise patterns: Repository, Unit of Work, CQRS

### 10.3 — State Management

- 🔴 Local state vs Shared state vs Server state — phân loại đúng
- 🔴 Flux architecture — unidirectional data flow
- 🔴 Immutability — tại sao quan trọng, structural sharing
- 🟡 Finite State Machines (XState) — cho complex UI state
- 🟡 Optimistic updates — pattern và rollback
- 🟢 Event sourcing cho client-side state

### 10.4 — Testing

- 🔴 Testing pyramid: Unit → Integration → E2E
- 🔴 Unit testing — pure functions, mock strategy
- 🔴 Integration testing — test user flows, không test implementation
- 🔴 Vitest/Jest: describe, it, expect, mock, spy
- 🔴 Testing Library principles — test như user, không test internal
- 🟡 E2E: Playwright — page objects, fixtures
- 🟡 Visual regression testing
- 🟡 Accessibility testing: axe-core, jest-axe
- 🟢 Property-based testing (fast-check)
- 🟢 Mutation testing

### 10.5 — TypeScript (bắt buộc cho Senior+)

- 🔴 Type system fundamentals — structural typing
- 🔴 Generics — constraints, defaults, infer keyword
- 🔴 Utility types: Partial, Required, Pick, Omit, Record, ReturnType, Parameters
- 🔴 Union types, Intersection types, Discriminated unions
- 🔴 Type narrowing — typeof, instanceof, in, custom type guards
- 🔴 Declaration merging, module augmentation
- 🟡 Conditional types — T extends U ? X : Y
- 🟡 Template literal types
- 🟡 Mapped types — keyof, in, as
- 🟡 Variance: covariance, contravariance (function parameters)
- 🟢 Type-level programming — recursive types, type challenges
- 🟢 TypeScript compiler API

### 📚 Tài liệu — Phase 10

| Tài liệu                           | Link                                                                            | Ghi chú                                                    |
| ---------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Patterns.dev                       | https://www.patterns.dev                                                        | Free — design patterns và rendering patterns cho modern JS |
| TypeScript Handbook                | https://www.typescriptlang.org/docs/handbook                                    | Official, free, đủ cho core                                |
| Type Challenges                    | https://github.com/type-challenges/type-challenges                              | Luyện TypeScript advanced bằng bài tập                     |
| Testing Library Docs               | https://testing-library.com/docs                                                | Principles và API                                          |
| Playwright Docs                    | https://playwright.dev/docs/intro                                               | E2E testing                                                |
| Clean Code (sách) — Robert Martin  | https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882 | Trả phí — đọc với tư duy phản biện                         |
| Refactoring Guru — Design Patterns | https://refactoring.guru/design-patterns                                        | Free, visual, dễ hiểu                                      |
| XState Docs                        | https://stately.ai/docs                                                         | State machines cho complex UI                              |

---
