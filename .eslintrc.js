module.exports = {
	root: true,
	env: {
		node: true,
	},
	rules: {
		indent: ['error', 'tab'],
		'no-tabs': 0,
		semi: ['error', 'always'],
		// allow paren-less arrow functions
		'arrow-parens': 0,
		'array-element-newline': [
			'error',
			{
				ArrayExpression: 'always',
				multiline: true,
				ArrayPattern: { minItems: 2 },
			},
		],
		// allow async-await
		'generator-star-spacing': 0,
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	extends: ['standard', 'prettier', 'plugin:jest/recommended'],
	plugins: ['prettier', 'jest'],
};
