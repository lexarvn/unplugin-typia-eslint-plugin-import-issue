module.exports = {
  extends: ['airbnb'],
  ignorePatterns: ['node_modules'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'import/no-unresolved': ['error'],
    'no-console': 'off',
  },
};
