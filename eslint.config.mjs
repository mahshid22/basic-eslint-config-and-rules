import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      'no-console': 'error',
      'react/prop-types': 'error',
      'react/react-in-jsx-scope': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      'prefer-const': 'error',
      '@typescript-eslint/no-var-requires': 'off',
      'no-console': 'error',
      'no-alert': 'error',
      'no-debugger': 'error',
      'react/prefer-stateless-function': 'error',
      'react/button-has-type': 'error',
      'react/no-unused-prop-types': 'error',
      'react/jsx-no-script-url': 'error',
      'react/no-children-prop': 'error',
      'react/no-danger': 'error',
      'react/no-unstable-nested-components': ['error', {allowAsProps: true}],
      'react/jsx-fragments': 'error',
      'react/destructuring-assignment': [
        'error',
        'always',
        {destructureInSignature: 'always'},
      ],
      'react/jsx-no-leaked-render': ['error', {validStrategies: ['ternary']}],
      'react/jsx-max-depth': ['error', {max: 5}],
      'react/function-component-definition': [
        'error',
        {namedComponents: 'arrow-function'},
      ],
      'react/jsx-key': [
        'error',
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
          warnOnDuplicates: true,
        },
      ],
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-curly-brace-presence': 'warn',
      'react/no-typos': 'warn',
      'react/display-name': 'warn',
      'react/self-closing-comp': 'warn',
      'react/no-array-index-key': 'error',
    },
  },
  {
    ignores: [
      '**/*.config.js',
      '!**/eslint.config.js',
      '**/node_modules/',
      '.git/',
    ],
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {languageOptions: {globals: globals.browser}},
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
