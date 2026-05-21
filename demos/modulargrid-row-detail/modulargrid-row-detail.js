import { ModularGridRowDetailAdapter } from '../../src/index.js';

const sections = [
	{
		label: 'Tool',
		value: 'database.query'
	},
	{
		label: 'Arguments JSON',
		value: JSON.stringify({
			table: 'base3_missionbay_tooluse',
			fields: ['id', 'tool_name', 'created_at'],
			where: {
				status: 'finished'
			}
		}, null, 2)
	},
	{
		label: 'Result JSON',
		value: JSON.stringify({
			count: 2,
			rows: [
				{
					id: 1,
					tool_name: 'database.query'
				},
				{
					id: 2,
					tool_name: 'formatter.json'
				}
			]
		}, null, 2)
	}
];

const adapter = new ModularGridRowDetailAdapter({
	mode: 'tree',
	collapsedDepth: 2
});

const target = document.querySelector('#rowDetail');
target.appendChild(adapter.renderSections(sections));
