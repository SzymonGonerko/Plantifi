module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      ["module:react-native-dotenv", {
        "envName": "REACT_APP",
        "moduleName": "@env",
        "path": ".env",
        "safe": true,
        "allowUndefined": true,
        "verbose": false
      }]
    ]
  };
};