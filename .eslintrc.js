module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    rules: {
        indent: [2, 4],
        'max-len': [2, { code: 140 }],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/require-default-props': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-props-no-spreading': 0,
        'react/function-component-definition': 0,
        'react/no-array-index-key': 0,
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': 0,
        'import/extensions': 0,
        'consistent-return': 0,
        'no-unused-vars': 1,
        'no-shadow': 0,
        'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['data-testid', 'to', 'reducerName'] }],
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 2,
        'no-param-reassign': 0,
        'no-undef': 0,
        camelcase: 0,
        'jsx-a11y/alt-text': 0,
        'no-underscore-dangle': 0,
    },
    // overrrides: [
    //     {
    //         files: ['**/src/**/*.{test, stories}.{ts,tsx}'],
    //         rules: {
    //             'i18next/no-literal-string': 'off',
    //         },
    //     },
    // ],
};
