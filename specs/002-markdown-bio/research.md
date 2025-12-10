# Research: Markdown Bio Rendering

**Feature**: 002-markdown-bio
**Date**: 2025-12-09

## Research Questions

### 1. Markdown Library Selection

**Decision**: react-markdown

**Rationale**:
- Lightweight (~12KB gzipped) and purpose-built for React
- Renders markdown to React components (not dangerouslySetInnerHTML)
- Built-in support for custom component overrides (for styling)
- Active maintenance and wide adoption
- No HTML by default (secure), opt-in via rehype-raw if needed
- Works seamlessly with Next.js static generation

**Alternatives Considered**:

| Library | Pros | Cons | Rejected Because |
|---------|------|------|------------------|
| marked + dangerouslySetInnerHTML | Fast, small | Security risk, not React-native | XSS concerns, requires manual sanitization |
| markdown-it | Extensible, fast | Not React-native, requires wrapper | Additional complexity, security handling |
| remark-react | Part of unified ecosystem | Deprecated in favor of react-markdown | Not maintained |
| MDX | Full JSX support | Overkill for inline strings, requires file-based content | Over-engineered for this use case |

### 2. HTML Sanitization Approach

**Decision**: Rely on react-markdown's default behavior (no raw HTML rendering)

**Rationale**:
- react-markdown does not render raw HTML by default
- Markdown syntax is converted to React elements, not HTML strings
- This provides XSS protection without additional dependencies
- If HTML appears in content, it renders as escaped text (safe)

**Alternatives Considered**:

| Approach | Pros | Cons | Rejected Because |
|----------|------|------|------------------|
| rehype-sanitize | Allows safe HTML subset | Additional dependency, complexity | Not needed if HTML rendering disabled |
| DOMPurify | Industry standard sanitizer | Requires dangerouslySetInnerHTML | Unnecessary complexity |
| No HTML allowed (default) | Simple, secure | Cannot use HTML in content | Acceptable tradeoff for security |

### 3. Styling Integration

**Decision**: Custom component overrides with Tailwind classes

**Rationale**:
- react-markdown supports `components` prop for custom element rendering
- Override `a`, `strong`, `em`, `p` elements with styled versions
- Preserves existing dark theme colors (text-text-primary, text-primary for links)
- No additional CSS files needed

**Implementation Pattern**:
```tsx
const components = {
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer"
       className="text-primary hover:text-secondary">
      {children}
    </a>
  ),
  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
};
```

### 4. External Link Handling

**Decision**: All links from markdown open in new tab with security attributes

**Rationale**:
- Content contains external URLs (company sites, resources)
- Opening in new tab preserves user's place on portfolio site
- `rel="noopener noreferrer"` prevents tabnabbing attacks
- Consistent with existing link behavior in the site

### 5. Performance Impact

**Decision**: Acceptable - react-markdown adds minimal overhead

**Rationale**:
- Library is ~12KB gzipped (within acceptable range)
- Markdown parsing happens at render time (fast for short content)
- Static generation means parsing happens at build time, not client
- Bio and descriptions are short text blocks (~100-500 words)
- No measurable impact on 3-second page load target

## Summary

| Decision | Choice | Risk Level |
|----------|--------|------------|
| Markdown library | react-markdown | Low |
| HTML handling | Disabled (default) | Low |
| Styling | Component overrides with Tailwind | Low |
| External links | New tab with noopener noreferrer | Low |
| Performance | No concerns | Low |

**All research questions resolved. Ready for Phase 1 design.**
