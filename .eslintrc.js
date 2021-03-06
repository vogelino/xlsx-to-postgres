module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
		jest: true,
	},
	parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
	ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
	extends: ['eslint:recommended'],
	overrides: [
		// This configuration will apply only to TypeScript files
		{
			plugins: ['import'],
			files: ['**/*.ts'],
			parser: '@typescript-eslint/parser',
			settings: {
				react: { version: 'detect' },
				'import/parsers': {
					'@typescript-eslint/parser': ['.ts'],
				},
				'import/resolver': {
					typescript: {
						alwaysTryTypes: true,
					},
				},
			},
			env: {
				browser: true,
				node: true,
				es6: true,
			},
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/recommended', // TypeScript rules
				'prettier/@typescript-eslint', // Prettier plugin
				'plugin:prettier/recommended', // Prettier recommended rules
			],
			rules: {
				// Why would you want unused vars?
				'@typescript-eslint/no-unused-vars': ['error'],

				// I suggest this setting for requiring return types on functions only where useful
				'@typescript-eslint/explicit-function-return-type': [
					'warn',
					{
						allowExpressions: true,
						allowConciseArrowFunctionExpressionsStartingWithVoid: true,
					},
				],
				'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules
				'import/no-unresolved': 'error',
			},
		},
	],
}
