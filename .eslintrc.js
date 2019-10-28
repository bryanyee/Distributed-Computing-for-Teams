module.exports = {
  env: {
    browser: true,
    node: true,
    es2015: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: '2015',
    ecmaFeatures: {
      jsx: true,
    },
  }
};
