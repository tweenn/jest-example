
module.exports = {
	collectCoverage: true,
	testEnvironment: 'node',
	coverageReporters: ['lcov', "text"],
	coverageDirectory: '<rootDir>/coverage/',
	testMatch: [
		'<rootDir>/app/**/*.test.js',
		'<rootDir>/__tests__/**/*.js'
	],
	collectCoverageFrom: ['./app/**/*.js'],
	testPathIgnorePatterns: ['/node_modules/'],
}