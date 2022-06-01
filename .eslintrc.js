module.exports = {
	extends: ['airbnb', 'prettier'],
	plugins: ['prettier', 'react', 'react-hooks'],
	rules: {
		indent: [2, 'tab', { SwitchCase: 1, VariableDeclarator: 1 }],
		'no-tabs': 0,
		'react/prop-types': 0,
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'prettier/prettier': ['error'],
		'linebreak-style': 0,
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'import/prefer-default-export': 'off',
		'react-hooks/rules-of-hooks': 'error',
	},
	env: {
		jest: true,
	},
	settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
			},
		},
	},
	globals: {
		fetch: true,
		window: true,
		document: true,
	},
};
