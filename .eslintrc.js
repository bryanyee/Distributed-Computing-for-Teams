module.exports = {
  env: {
    browser: true,
    es2015: true,
    jquery: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: 'babel-eslint',
  rules: {
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
    'react/jsx-sort-props': ['error', { ignoreCase: true }],
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
  }
};
