import {
	JsonLens,
	TreeViewPlugin,
	SyntaxHighlightPlugin,
	RawViewPlugin,
	ClipboardPlugin,
	SearchPlugin,
	PathPlugin
} from '../../src/index.js';

const value = {
	status: 'ok',
	createdAt: '2026-05-21T12:00:00Z',
	request: {
		method: 'POST',
		endpoint: '/mcp/functions/example',
		arguments: {
			query: 'Show active tool logs',
			limit: 20
		}
	},
	result: {
		count: 2,
		items: [
			{
				id: 101,
				tool: 'database.query',
				success: true
			},
			{
				id: 102,
				tool: 'formatter.json',
				success: true
			}
		]
	}
};

const lens = new JsonLens('#jsonLens', {
	value,
	mode: 'tree',
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
