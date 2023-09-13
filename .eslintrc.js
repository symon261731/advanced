module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
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
    },

    rules: {
        indent: [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/require-default-props': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-props-no-spreading': 1,
        'react/function-component-definition': 0,
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': 0,
        'import/extensions': 0,
        'no-unused-vars': 1,
        'no-shadow': 0,
        'i18next/no-literal-string': ['error', { markupOnly: true }],
    },
};
