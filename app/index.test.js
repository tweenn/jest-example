
jest.mock('./operations', () => {
	return {
		sum: jest.fn().mockImplementation(() => {
			return true;
		}),
		sumSync: jest.fn().mockImplementation(() => {
			return new Promise((resolve, reject) => {
				resolve(true);
			});
		}),
	};
});

const operations = require('./operations');

describe('Testing the APP', () => {
	it('Should run as fast as possible', async () => {
		require('./index');

		expect(operations.sum).toHaveBeenCalled();
		expect(operations.sumSync).toHaveBeenCalled();
	});
});
