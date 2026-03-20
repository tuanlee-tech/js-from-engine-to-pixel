## PHASE 6 — Security

_Senior phải biết bảo vệ code. Staff phải thiết kế hệ thống secure._

### 6.1 — Common Vulnerabilities

- 🔴 XSS (Cross-Site Scripting): reflected, stored, DOM-based — cách phòng
- 🔴 CSRF (Cross-Site Request Forgery) — SameSite cookies, CSRF tokens
- 🔴 Injection attacks — SQL, NoSQL, Command injection
- 🔴 Content Security Policy (CSP) — directives, nonce, hash
- 🔴 HTTPS everywhere — mixed content
- 🟡 Clickjacking — X-Frame-Options, CSP frame-ancestors
- 🟡 Open Redirect — server-side và client-side
- 🟡 Prototype pollution — Object.prototype modification
- 🟢 Subresource Integrity (SRI) — integrity attribute cho scripts/styles
- 🟢 Trusted Types API — prevent DOM XSS

### 6.2 — Authentication & Authorization

- 🔴 Cookie-based auth vs Token-based auth (JWT) — trade-offs thật
- 🔴 JWT: structure, verification, khi nào KHÔNG nên dùng
- 🔴 OAuth 2.0 flows: Authorization Code + PKCE (for SPA), Client Credentials
- 🔴 Secure cookie storage — HttpOnly, Secure, SameSite=Strict
- 🟡 Session management
- 🟡 Refresh token rotation
- 🟢 WebAuthn / Passkeys

### 📚 Tài liệu — Phase 6

| Tài liệu                         | Link                                                  | Ghi chú                                  |
| -------------------------------- | ----------------------------------------------------- | ---------------------------------------- |
| OWASP Top 10                     | https://owasp.org/www-project-top-ten                 | Chuẩn công nghiệp về vulnerabilities     |
| PortSwigger Web Security Academy | https://portswigger.net/web-security                  | Free labs thực hành XSS, CSRF, injection |
| MDN — Content Security Policy    | https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP | CSP directives đầy đủ                    |
| web.dev — Security               | https://web.dev/explore/secure                        | HTTPS, cookies, SameSite                 |
| Auth0 — JWT Handbook             | https://auth0.com/resources/ebooks/jwt-handbook       | Free ebook về JWT internals              |
| OAuth 2.0 RFC                    | https://oauth.net/2                                   | Spec chính thức, đọc phần flows          |

---
