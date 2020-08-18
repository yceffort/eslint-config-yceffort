module.exports = {
  extends: [
    './style', 
    './variable', 
    './react', 
    './react-hooks'
  ].map((e) =>
    require.resolve(e),
  ),
}