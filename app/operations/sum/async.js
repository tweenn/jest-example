
const sum = require('./sync');

module.exports = async (baseValue, sumValue) => {
	return new Promise((resolve, reject) => {
		resolve(sum(baseValue, sumValue));
	});
};
