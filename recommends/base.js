module.exports = {
  extends: [
    './eslint',
    './standard',
    './prettier',
    './react',
    './react-hooks',
  ].map((e) => require.resolve(e))
}
