module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: 'tsconfig.json',
    },
    rules: {
        '@typescript-eslint/ban-ts-comment': 'warn',
        // '@typescript-eslint/naming-convention': ['error', { selector: 'variableLike', format: ['camelCase'] }],
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
};
