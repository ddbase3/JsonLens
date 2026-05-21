# JsonLens Current Status

This file describes the implemented baseline of the current patch.

## Current implementation status

The repository has a runnable Vanilla JavaScript foundation with ES modules and no build step.

### Core source

- `src/JsonLens.js`
- `src/JsonLensViewer.js`
- `src/JsonLensTree.js`
- `src/JsonLensFormatter.js`
- `src/index.js`

### Core classes

- `src/core/JsonLensEventBus.js`
- `src/core/JsonLensStateStore.js`
- `src/core/JsonLensPluginManager.js`
- `src/core/JsonLensCommandRegistry.js`

### Adapters

- `src/adapters/StringJsonAdapter.js`
- `src/adapters/ObjectJsonAdapter.js`
- `src/adapters/ModularGridRowDetailAdapter.js`

### Plugins

- `src/plugins/TreeViewPlugin.js`
- `src/plugins/SyntaxHighlightPlugin.js`
- `src/plugins/ClipboardPlugin.js`
- `src/plugins/SearchPlugin.js`
- `src/plugins/PathPlugin.js`
- `src/plugins/RawViewPlugin.js`
- `src/plugins/StoragePlugin.js`

### Utilities

- `src/utils/parseJson.js`
- `src/utils/formatJson.js`
- `src/utils/jsonPath.js`
- `src/utils/renderTokens.js`
- `src/utils/dom.js`

### Styles

- `src/styles/jsonlens.css`

## Current working feature set

The current baseline supports:

- creating independent JsonLens instances
- parsing JSON strings
- accepting object values directly
- rendering invalid JSON errors without throwing into the UI
- switching between tree, pretty and raw modes
- expanding and collapsing tree nodes
- expand-all and collapse-all commands
- syntax highlighting in pretty view
- active path tracking
- copy all, copy path and copy value commands
- simple search term highlighting in tree and pretty views
- localStorage-backed state persistence through optional `StoragePlugin`
- simulated ModularGrid RowDetail section rendering through `ModularGridRowDetailAdapter`

## Current demos

- `demos/basic/`
- `demos/large-json/`
- `demos/invalid-json/`
- `demos/modulargrid-row-detail/`

## Current smoke coverage

- `tests/node-smoke/smoke.mjs` covers parser, formatter, path helpers and adapters.
- `tests/browser-smoke/smoke.js` covers DOM rendering, mode switching, invalid JSON and RowDetail adapter rendering.

## Known limits

- No lazy rendering yet.
- No virtualized tree yet.
- No real ModularGrid API integration yet because the exact RowDetail renderer contract has not been provided.
- Search has highlighting only; no result navigation yet.
- Clipboard feedback events exist, but no visible toast/status plugin exists yet.
- StoragePlugin uses localStorage only in this patch.
