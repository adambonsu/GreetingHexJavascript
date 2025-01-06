module.exports = {
  env: {
    node: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:security/recommended",
    "plugin:jest/recommended",
  ],
  plugins: ["security", "jest"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    // Add any specific rules here
  },
};
