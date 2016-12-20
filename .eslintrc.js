module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "flowtype"
  ],
  "env": {
    "commonjs": true,
    "mocha": true,
    "es6": true,
    "node": true,
    "jquery": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:flowtype/recommended"],
  "parserOptions": {
    "sourceType":"module",
    "ecmaVersion": 7,
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
  "rules": {
    "react/prefer-stateless-function": 1,
    "camelcase": [2, {"properties": "always"}],
    "semi": [2, "always"],
    "no-multiple-empty-lines": [2, {"max": 1}]
  }
}
