# JsonLens

JsonLens is a standalone Vanilla JavaScript module for inspecting JSON values in browser UIs.

The project starts with the same general structure as ModularGrid: ES modules, a small instance core, adapters, plugins, utilities, demos, browser smoke coverage and continuation docs.

## Current scope

This initial package is the first development patch.

It includes:

- instance-based `JsonLens` core
- state store
- event bus
- command registry
- plugin manager
- string and object JSON adapters
- safe tree view
- pretty view with syntax highlighting
- raw view
- invalid JSON error display
- toolbar with view switching, expand/collapse and plugin contributions
- clipboard plugin for copy-all, copy-path and copy-value
- search plugin foundation with highlight support
- active path display
- storage plugin foundation
- browser demos
- node smoke test
- browser smoke test
- project documentation and working rules

## Project structure

- `src/` core source, adapters, plugins, utilities and styles
- `demos/` manual browser demos
- `tests/` smoke coverage
- `docs/` continuation and architecture documentation

## How to run

Use any static web server from the project root.

```bash
python3 -m http.server 8000
```

Then open for example:

- `http://localhost:8000/demos/basic/`
- `http://localhost:8000/demos/large-json/`
- `http://localhost:8000/demos/invalid-json/`
- `http://localhost:8000/demos/modulargrid-row-detail/`
- `http://localhost:8000/tests/browser-smoke/`

## Node smoke test

```bash
npm run smoke
```

The node smoke test intentionally covers non-DOM behavior only. Browser rendering is covered by `tests/browser-smoke/`.

## Basic usage

```javascript
import {
	JsonLens,
	TreeViewPlugin,
	SyntaxHighlightPlugin,
	RawViewPlugin,
	ClipboardPlugin,
	SearchPlugin,
	PathPlugin
} from './src/index.js';

const lens = new JsonLens('#jsonLens', {
	value: '{"status":"ok","items":[1,2,3]}',
	mode: 'tree',
	indent: 2,
	collapsedDepth: 2,
	plugins: [
		TreeViewPlugin,
		SyntaxHighlightPlugin,
		RawViewPlugin,
		ClipboardPlugin,
		SearchPlugin,
		PathPlugin
	]
});

lens.init();
```

## Static DOM creation

```javascript
import { JsonLens } from './src/index.js';

const element = JsonLens.createElement({
	value: section.value,
	mode: 'tree',
	collapsedDepth: 2,
	showToolbar: true
});

container.appendChild(element);
```

## View modes

- `tree` renders object and array structures as expandable nodes.
- `pretty` renders formatted JSON with syntax highlighting.
- `raw` renders the original source value.

## ModularGrid integration note

This package includes `ModularGridRowDetailAdapter`, but it does not assume private ModularGrid internals. The demo under `demos/modulargrid-row-detail/` simulates a RowDetail section payload. A real integration should be implemented after the exact RowDetail renderer contract is provided.

## Documentation

For continuation across chats, start with:

- `docs/README.md`
- `docs/CURRENT_STATUS.md`
- `docs/WORKING_RULES.md`
- `docs/NEW_CHAT_BRIEFING.md`
- `docs/architecture/CORE_CONTRACT.md`
- `docs/architecture/PLUGIN_API.md`
- `docs/architecture/ADAPTERS.md`
- `docs/todo/FEATURE_TODO.md`

## Important design rule

JsonLens must remain a standalone JSON inspection module.

ModularGrid may use JsonLens, but JsonLens must not become hardwired to ModularGrid.
