
const sum = require('./sync')

describe('Testing SUM sync', () => {
	it('Should return a sum', () => {
		const summedValue = sum(1, 1);

		expect(summedValue).toBe(2);
	});

	it('Should return a NaN', () => {
		const summedValue = sum(1);

		expect(summedValue).toBe(NaN);
	});
});
