module.exports = {
  extends: [
    './recommends/base', 
    './rules/base'
  ].map((e) => require.resolve(e)),
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  settings: {
    react: {
      createClass: 'createReactClass', 
      pragma: 'React',
      version: 'detect', 
    },
  },
  rules: {},
}