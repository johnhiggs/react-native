module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
    "detox",
  ],
  "env": {
    "detox/detox": true,
    "mocha": true,
  },
  "rules": {
    "no-use-before-define": 0,
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
  }
};
