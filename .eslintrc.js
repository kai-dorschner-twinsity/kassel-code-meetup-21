module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', '@typescript-eslint'],
  ignorePatterns: ['**/dist', '**/.eslintrc.*', '**/.*rc.js', '**/*.config.js'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:typescript-sort-keys/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    formComponents: ['Form'],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      { name: 'Link', linkAttribute: 'to' },
      'Button',
    ],
  },
  rules: {
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@src/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'import/first': 'error',
    'import/newline-after-import': 'warn',
    'import/no-duplicates': 'error',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-unused-modules': ['warn' /* , { unusedExports: true } */],
    'import/no-extraneous-dependencies': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_|e$', varsIgnorePattern: '^_|e$' },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/unified-signatures': 'error',

    camelcase: 'off',
    complexity: 'warn',
    'constructor-super': 'error',
    curly: ['error', 'multi-line'],
    'dot-notation': 'error',
    'eol-last': 'off',
    eqeqeq: ['error', 'smart'],
    'guard-for-in': 'error',
    'id-blacklist': ['error', 'Undefined'],
    'id-match': 'error',
    'linebreak-style': ['warn', 'unix'],
    'max-classes-per-file': 'off',
    'max-len': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-case-declarations': 'off',
    'no-cond-assign': 'error',
    'no-console': 'warn',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'warn',
    'no-empty': 'off',
    'no-eval': 'error',
    'no-extra-semi': 'warn',
    'no-extra-boolean-cast': 'off',
    'no-fallthrough': 'warn',
    'no-invalid-regexp': 'error',
    'no-multiple-empty-lines': 'off',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-syntax': ['error', 'ForInStatement'],
    'no-shadow': [
      'off',
      {
        hoist: 'all',
      },
    ],
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'off',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'off',
    'no-unsafe-finally': 'error',
    'no-unused-labels': 'error',
    'no-unused-vars': 'off',
    'no-warning-comments': ['error', { terms: ['fixme'], location: 'start' }],
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: ['const', 'let', 'var', 'multiline-block-like'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var', 'if'], next: ['const', 'let', 'var', 'if', 'return'] },
    ],
    'prefer-arrow-callback': 'error',
    'quote-props': 'off',
    radix: 'error',
    'space-before-function-paren': 'off',
    'space-in-parens': ['off', 'never'],
    'spaced-comment': ['warn', 'always', { markers: ['/'] }],
    // 'sort-imports': [
    //   'warn',
    //   { ignoreCase: true, allowSeparatedGroups: true, memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'] },
    // ],
    'typescript-sort-keys/interface': 'warn',
    'typescript-sort-keys/string-enum': 'off',
    'use-isnan': 'error',
    'valid-typeof': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-no-literals': 'warn',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useLazy|useLazyCallback)',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/accessible-emoji': 'warn',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/media-has-caption': 'off',
  },
};
