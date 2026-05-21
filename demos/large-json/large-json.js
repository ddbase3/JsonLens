import { JsonLens } from '../../src/index.js';

const value = {
	meta: {
		name: 'large-json-demo',
		generated: true
	},
	rows: Array.from({ length: 40 }, (_, index) => ({
		id: index + 1,
		name: `Row ${index + 1}`,
		active: index % 3 !== 0,
		tags: [`group-${index % 5}`, `state-${index % 2}`],
		metrics: {
			durationMs: 120 + index,
			retries: index % 4,
			score: Number((0.75 + index / 100).toFixed(2))
		}
	}))
};

const lens = new JsonLens('#jsonLens', {
	value,
	mode: 'tree',
	collapsedDepth: 1
});

lens.init();
