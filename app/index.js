
const operations = require('./operations');

console.log('sum-async', operations.sum(1, 1));
console.log('sum-sync', operations.sumSync(1, 1));

const init = async () => {
	console.log('awaited sum-async', await operations.sum(1, 1));
}

init();
