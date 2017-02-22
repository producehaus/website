module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },

  extends: 'eslint:recommended',
  env: {
    es6: true,
    browser: true
  },
  rules: {
  },
  globals: {
    "TimelineMax": true,
    "Power1": true
  }
};
