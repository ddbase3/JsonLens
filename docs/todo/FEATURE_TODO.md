# JsonLens Feature Todo

This file is the main feature checklist for the project.

## Legend

- `[ ]` not started
- `[~]` in progress / partially available
- `[x]` available in some usable form

---

# 1. Foundation

- [x] Create repository structure
- [x] Add `package.json`
- [x] Add central `src/index.js`
- [x] Add `JsonLens` instance class
- [x] Add event bus
- [x] Add state store
- [x] Add command registry
- [x] Add plugin manager
- [x] Add CSS baseline
- [x] Add docs baseline
- [x] Add working rules

# 2. Input handling

- [x] String JSON adapter
- [x] Object JSON adapter
- [x] Parse JSON strings
- [x] Preserve raw source string
- [x] Format parsed values
- [x] Controlled invalid JSON errors
- [ ] Better parser diagnostics with position display
- [ ] Optional tolerant parser mode

# 3. Views

- [x] Tree view
- [x] Pretty view
- [x] Raw view
- [x] View switching
- [x] Syntax highlighting
- [ ] Long string expansion control
- [ ] Empty object/array display refinement
- [ ] Lazy rendering for large payloads
- [ ] Virtualized tree rendering

# 4. Tree behavior

- [x] Expand/collapse node
- [x] Expand all
- [x] Collapse all
- [x] Configurable collapsed depth
- [x] Array length display
- [x] Object key count display
- [ ] Keyboard navigation
- [ ] Stable active-node visual state
- [ ] Per-node copy controls

# 5. Clipboard and path

- [x] Copy complete JSON
- [x] Track active path
- [x] Copy active path
- [x] Copy active value
- [ ] Copy subtree from node action
- [ ] Visible copy success feedback
- [ ] JSONPath format options

# 6. Search

- [~] Search input
- [~] Highlight matches
- [ ] Match count
- [ ] Next/previous match navigation
- [ ] Expand matched branches

# 7. Storage

- [~] LocalStorage plugin foundation
- [ ] Storage adapter abstraction
- [ ] SessionStorage adapter
- [ ] Per-instance storage scopes
- [ ] Persist expanded paths selectively

# 8. ModularGrid / BASE3 integration

- [~] Safe RowDetail section adapter demo
- [ ] Real ModularGrid RowDetail renderer integration
- [ ] AgentToolLogAdminDisplay demo fixture
- [ ] BASE3 asset path documentation
- [ ] Integration docs for ILIAS public asset paths

# 9. Security and safety

- [x] Avoid `innerHTML` for JSON values
- [x] Use DOM nodes and text nodes
- [ ] Add masking plugin for secrets/tokens
- [ ] Add max-size guardrails
- [ ] Add configurable render limits

# 10. Testing and demos

- [x] Basic demo
- [x] Large JSON demo
- [x] Invalid JSON demo
- [x] RowDetail adapter demo
- [x] Node smoke test
- [x] Browser smoke test
- [ ] Browser smoke automation with Playwright or equivalent
- [ ] Demo for storage plugin
- [ ] Demo for copy/path workflow

---

# Recommended next implementation order

1. Improve tree UX: active path visual state and per-node copy buttons.
2. Add visible clipboard feedback/status plugin.
3. Add search match count and next/previous navigation.
4. Add real ModularGrid integration after the required RowDetail files are provided.
5. Add masking plugin for secrets and tokens.
