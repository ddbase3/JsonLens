import assert from 'node:assert/strict';
import {
	JsonLens,
	JsonLensFormatter,
	ObjectJsonAdapter,
	StringJsonAdapter,
	formatJson,
	getValueAtPath,
	parseJson,
	toChildPath
} from '../../src/index.js';

const parsed = parseJson('{"status":"ok","items":[1,2]}');
assert.equal(parsed.ok, true);
assert.equal(parsed.value.status, 'ok');

const invalid = parseJson('{"status":"broken",}');
assert.equal(invalid.ok, false);

assert.equal(formatJson({ a: 1 }, 2), '{\n  "a": 1\n}');
assert.equal(toChildPath('$.items', 0), '$.items[0]');
assert.equal(toChildPath('$', 'validKey'), '$.validKey');
assert.equal(toChildPath('$', 'invalid.key'), '$["invalid.key"]');
assert.equal(getValueAtPath({ items: [{ name: 'Alpha' }] }, '$.items[0].name'), 'Alpha');

const stringAdapter = new StringJsonAdapter();
assert.equal(stringAdapter.parse('{"a":1}').ok, true);

const objectAdapter = new ObjectJsonAdapter();
assert.equal(objectAdapter.parse({ a: 1 }).ok, true);

assert.equal(JsonLens.canParse('{"a":1}'), true);
assert.equal(JsonLens.canParse('{"a":}'), false);
assert.equal(JsonLensFormatter.format({ a: 1 }, { indent: 2 }), '{\n  "a": 1\n}');

console.log('JsonLens node smoke passed.');
