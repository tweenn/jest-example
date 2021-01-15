
const sum = require('./async')

describe('Testing SUM sync', () => {
	it('Should return a promissed sum', async () => {
		const summedValue = sum(1, 1);

		expect(summedValue).resolves.toBe(2);
	});

	it('Should return a promissed NaN', async () => {
		const summedValue = sum(1);

		expect(summedValue).resolves.toBe(NaN);
	});
});
