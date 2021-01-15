
const operations = require('./index');

describe('Testing the Operations Object', () => {
	it('Should export an object with SUM Objects', async () => {
		expect(operations).toHaveProperty('sum');
		expect(operations).toHaveProperty('sumSync');
	});
});