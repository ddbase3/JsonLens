import { JsonLens } from '../../src/index.js';

const invalidJson = '{"status":"broken","items":[1,2,],"message":"Trailing comma"}';

const lens = new JsonLens('#jsonLens', {
	value: invalidJson,
	mode: 'tree',
	collapsedDepth: 2
});

lens.init();
