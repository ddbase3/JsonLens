# JsonLens New Chat Briefing

Use the text below to brief a new chat.

---

You are working on the `JsonLens` project.

Please read these files first:

1. `docs/README.md`
2. `docs/CURRENT_STATUS.md`
3. `docs/WORKING_RULES.md`
4. `docs/architecture/CORE_CONTRACT.md`
5. `docs/architecture/PLUGIN_API.md`
6. `docs/architecture/ADAPTERS.md`
7. `docs/todo/FEATURE_TODO.md`

## Important project context

JsonLens is a standalone Vanilla JavaScript module for structured JSON inspection.

The module should be usable inside ModularGrid RowDetail, BASE3/ILIAS admin displays, reports and other browser UIs, but it must not become hardwired to ModularGrid.

## Current technical status

The project already has:

- `JsonLens` core instance
- event bus
- state store
- command registry
- plugin manager
- string adapter
- object adapter
- simulated ModularGrid RowDetail adapter
- tree view plugin
- syntax highlight / pretty view plugin
- raw view plugin
- clipboard plugin
- search plugin foundation
- path plugin
- optional storage plugin
- browser demos
- node and browser smoke tests

## Important current design rules

- Keep the core small.
- Prefer plugins and adapters for feature growth.
- Do not use `innerHTML` for JSON values.
- Use tab indentation.
- Use English code comments.
- Keep opening braces on the same line.
- Provide complete files.
- Do not guess missing ModularGrid APIs.

## Current task

[Replace this line with the specific next feature or goal.]

---
