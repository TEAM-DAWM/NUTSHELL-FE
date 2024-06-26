module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'airbnb',
		'prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react', 'react-hooks', 'react-refresh', '@typescript-eslint'],
	rules: {
		'react/require-default-props': 'off',
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
		'react/react-in-jsx-scope': 'off',
		'import/no-extraneous-dependencies': 0,
		'no-use-before-define': ['error', { functions: true, classes: true, variables: false }],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
	},

	overrides: [
		{
			files: '**/*.+(ts|tsx)',
			parser: '@typescript-eslint/parser',
			plugins: ['@typescript-eslint'],
			extends: ['plugin:@typescript-eslint/recommended'],
		},
		{
			files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
			env: {
				'jest/globals': true,
			},
			plugins: ['jest', 'jest-dom', 'testing-library'],
			extends: ['plugin:jest/recommended', 'plugin:jest-dom/recommended', 'plugin:testing-library/react'],
		},
	],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
};
