# JsonLens Adapters

Adapters normalize external input before JsonLens renders it.

## Adapter contract

An adapter should provide:

```javascript
parse(value, options) {
	return {
		ok: true,
		raw: '',
		value: null,
		formatted: '',
		error: null,
		sourceType: 'string'
	};
}
```

## Result fields

- `ok` indicates whether parsing succeeded.
- `raw` is the original or safely stringified source value.
- `value` is the parsed JavaScript value.
- `formatted` is formatted JSON for pretty view.
- `error` contains a parser error message for invalid input.
- `sourceType` identifies the adapter source type.

## Current adapters

### StringJsonAdapter

Accepts JSON strings and parses them with `JSON.parse()`.

### ObjectJsonAdapter

Accepts direct JavaScript values and stringifies them for raw/pretty views.

### ModularGridRowDetailAdapter

Renders a list of RowDetail-like sections and replaces JSON-looking section values with JsonLens instances.

This adapter intentionally does not depend on private ModularGrid APIs. It should be wired to the real ModularGrid RowDetail renderer only after the exact contract is available.

## Future adapters

Potential future adapters:

- `UrlJsonAdapter`
- `TextareaJsonAdapter`
- `FormFieldJsonAdapter`
- `Base3ToolLogAdapter`
- `MaskedJsonAdapter`
