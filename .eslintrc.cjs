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
		'airbnb-typescript',
		'prettier',
		'plugin:storybook/recommended',
	],
	parserOptions: {
		project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
	},
	ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
	parser: '@typescript-eslint/parser',
	plugins: ['react', 'react-hooks', 'react-refresh', '@typescript-eslint'],
	rules: {
		'react/jsx-props-no-spreading': 'off',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'react/require-default-props': 'off',
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
		'react/react-in-jsx-scope': 'off',
		'import/no-extraneous-dependencies': 0,
		'no-use-before-define': ['error', { functions: true, classes: true, variables: false }],
		'import/extensions': 'off',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': [
			'error',
			{
				ignoreTypeValueShadow: true,
				ignoreFunctionTypeParameterNameValueShadow: true,
				allow: ['theme', 'size', 'color', 'mode'],
			},
		],
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
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
	],
	settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
};
