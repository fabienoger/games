module.exports = {
	root: true,
	parser: 'babel-eslint',
	env: {
		'browser': true,
		'commonjs': true,
		'es6': true,
		'node': true
	},
	extends: [
		"eslint:recommended"
	],
	// add your custom rules here
	rules: {
		'indent': ['warn', 2, { 'SwitchCase': 1 }],
		'semi': ['warn', 'never'],
		'quotes': ['error', 'single'],
		'eol-last': ['error', 'always'],
		'space-before-function-paren': ['warn', {
			'anonymous': 'never',
			'named': 'never',
			'asyncArrow': 'ignore'
		}]
		// 'no-const-assign': 'warn',
		// 'no-this-before-super': 'warn',
		// 'no-undef': 'warn',
		// 'no-unreachable': 'warn',
		// 'no-unused-vars': 'warn',
		// 'constructor-super': 'warn',
		// 'valid-typeof': 'warn'
	},
	globals: {}
}
