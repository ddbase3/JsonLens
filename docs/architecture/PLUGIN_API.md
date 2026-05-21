# JsonLens Plugin API

This file defines the plugin model.

## Plugin purpose

A plugin adds optional behavior without forcing feature logic into the core.

## Plugin shape

A plugin is an object with a unique `name`.

```javascript
export const ExamplePlugin = {
	name: 'example',

	install(context) {},

	destroy(context) {},

	commands: {
		exampleCommand(context, payload) {}
	},

	views: [
		{
			name: 'example',
			label: 'Example',
			render(container, lens, renderContext) {}
		}
	],

	layoutContributions(context) {
		return [
			{
				zone: 'toolbar',
				order: 100,
				render(renderContext) {
					return document.createTextNode('Example');
				}
			}
		];
	}
};
```

## Plugin fields

### `name`

Required. Must be unique per JsonLens instance.

### `install(context)`

Optional. Called when the plugin is installed.

### `destroy(context)`

Optional. Called when the JsonLens instance is destroyed.

### `commands`

Optional object of command handlers.

Handlers receive `(context, payload)`.

### `views`

Optional list of view definitions.

A view requires:

- `name`
- `render(container, lens, renderContext)`

### `layoutContributions(context)`

Optional. Returns toolbar contributions for this patch.

Current supported zone:

- `toolbar`

## Plugin context

The context exposes:

- `lens`
- `store`
- `events`
- `commands`
- `getState()`
- `peekState()`
- `setState(patch)`
- `execute(commandName, payload)`
- `requestRender()`
- `getOptions()`
- `getPluginOptions(pluginName)`
- `registerView(view)`

Plugins should use this context instead of reaching into unrelated internals.

## Current plugins

### TreeViewPlugin

Registers the `tree` view.

### SyntaxHighlightPlugin

Registers the `pretty` view.

### RawViewPlugin

Registers the `raw` view.

### ClipboardPlugin

Registers copy commands and toolbar buttons.

### SearchPlugin

Registers search state and search input contribution.

### PathPlugin

Shows the active JSON path in the toolbar.

### StoragePlugin

Persists selected state sections to localStorage.

## Recommended plugin boundaries

A plugin should own one coherent feature area.

Good future plugin candidates:

- masking
- download JSON
- search result navigation
- JSONPath panel
- diff view
- lazy tree rendering
- schema validation
- toast/status feedback
