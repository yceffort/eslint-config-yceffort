module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "./recommends/base",
    "./recommends/typescript",
    "./rules/base",
    "./rules/typescript",
  ].map((e) => require.resolve(e)),
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "detect",
    },
  },
  rules: {},
};
