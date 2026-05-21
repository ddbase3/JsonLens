# JsonLens Working Rules

These rules guide all future development patches.

## Main rule

JsonLens must remain a standalone JSON inspection module.

Do not hardwire it into ModularGrid or BASE3. Integrations should be adapters, renderers or demos unless a stable external contract is provided.

## Patch rule

Every development step must produce a zip patch with a consistent complete repository state.

Each patch should include all relevant updates to:

- source code
- plugins
- adapters
- demos
- smoke tests
- README
- docs
- todo/status files

## Complete-file rule

Always provide complete files, not fragments for manual insertion.

## Style rule

Use the established style consistently:

- tab indentation
- opening braces on the same line
- English comments in code
- ES modules
- no framework dependency
- no build step unless explicitly introduced later

## No-guessing rule

Do not invent missing external contracts.

If a real ModularGrid integration requires files or APIs that are not present, ask for those files or keep the implementation limited to a safe adapter/demo boundary.

## Core rule

Keep the core small.

The core may coordinate:

- lifecycle
- state
- commands
- events
- parsing coordination
- rendering coordination
- plugin installation

Feature behavior should preferably live in plugins, adapters or focused utilities.

## Plugin-first rule

Before adding a new feature to `JsonLens.js`, check whether it belongs in:

1. plugin
2. adapter
3. utility
4. focused component such as `JsonLensTree`
5. core only if a stable extension point is missing

## Security rule

Never render JSON values through `innerHTML`.

Use `textContent`, text nodes or explicitly created DOM nodes.

## Multiple-instance rule

Every change must remain safe for multiple independent JsonLens instances on one page.

Avoid:

- global mutable state
- document-wide selectors without instance scoping
- shared storage keys unless explicitly configured

## Testing rule

Whenever visible behavior changes, update browser smoke coverage.

Whenever parser, formatter, path or adapter behavior changes, update node smoke coverage.

## Documentation rule

When a new architectural concept is introduced, update the relevant file in `docs/`.

At minimum, consider:

- `README.md`
- `docs/CURRENT_STATUS.md`
- `docs/architecture/CORE_CONTRACT.md`
- `docs/architecture/PLUGIN_API.md`
- `docs/architecture/ADAPTERS.md`
- `docs/todo/FEATURE_TODO.md`

## Anti-patterns to avoid

Avoid:

- React/Vue/framework coupling
- hidden ModularGrid coupling
- DOM as source of truth
- parser behavior hidden inside a view
- feature flags with unclear ownership
- CSS hacks replacing explicit state
- monolithic `JsonLens.js` growth
