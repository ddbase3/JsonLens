import { JsonLens, ModularGridRowDetailAdapter } from '../../src/index.js';

const results = document.querySelector('#results');
const fixture = document.querySelector('#fixture');
const secondFixture = document.querySelector('#secondFixture');

function assert(condition, message) {
	if (!condition) {
		throw new Error(message);
	}
}

function report(message, passed = true) {
	const line = document.createElement('div');
	line.className = passed ? 'jl-smoke-pass' : 'jl-smoke-fail';
	line.textContent = `${passed ? 'PASS' : 'FAIL'}: ${message}`;
	results.appendChild(line);
}

try {
	const lens = new JsonLens(fixture, {
		value: {
			status: 'ok',
			items: [
				{ id: 1, name: 'Alpha' },
				{ id: 2, name: 'Beta' }
			]
		},
		mode: 'tree',
		collapsedDepth: 1
	});

	lens.init();
	assert(fixture.querySelector('.jl-root'), 'Root should render.');
	assert(fixture.querySelector('.jl-toolbar'), 'Toolbar should render.');
	assert(fixture.querySelector('.jl-tree'), 'Tree view should render.');
	report('tree view renders');

	fixture.querySelector('[data-jl-mode="pretty"]').click();
	assert(fixture.querySelector('.jl-pretty'), 'Pretty view should render after mode switch.');
	report('pretty view renders after mode switch');

	fixture.querySelector('[data-jl-mode="raw"]').click();
	assert(fixture.querySelector('.jl-raw'), 'Raw view should render after mode switch.');
	report('raw view renders after mode switch');

	lens.execute('setValue', '{"valid":true,"nested":{"count":3}}');
	assert(fixture.querySelector('.jl-raw'), 'Raw view should remain available after setValue.');
	report('setValue command accepts JSON strings');

	lens.execute('setMode', 'tree');
	lens.execute('collapseAll');
	assert(fixture.querySelector('.jl-node-collapsed'), 'Collapse all should collapse child nodes.');
	report('collapseAll command updates tree state');

	const invalidLens = new JsonLens(secondFixture, {
		value: '{"broken": true,}',
		mode: 'tree'
	});
	invalidLens.init();
	assert(secondFixture.querySelector('.jl-error'), 'Invalid JSON should render error state.');
	report('invalid JSON renders controlled error state');

	const adapter = new ModularGridRowDetailAdapter();
	const sectionElement = adapter.renderSections([
		{
			label: 'Arguments JSON',
			value: '{"id":1}'
		}
	]);
	assert(sectionElement.querySelector('.jl-root'), 'Row detail adapter should render JsonLens for JSON sections.');
	report('row detail adapter renders JSON sections');
} catch (error) {
	report(error.message, false);
	throw error;
}
