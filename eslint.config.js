import js from "@eslint/js";
import jestPlugin from "eslint-plugin-jest";
import securityPlugin from "eslint-plugin-security";

export default [
  js.configs.recommended,
  jestPlugin.configs["flat/recommended"],
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        require: "readonly",
        module: "readonly",
        console: "readonly",
        process: "readonly",
        // Add Node.js globals
        __dirname: "readonly",
        __filename: "readonly",
        exports: "writable",
      },
    },
    plugins: {
      security: securityPlugin,
    },
    rules: {
      // General JavaScript rules
      "no-unused-vars": "warn",
      "no-undef": "error",
      "prefer-const": "error",
      eqeqeq: ["error", "always"],

      // Security rules
      "security/detect-object-injection": "warn",
      "security/detect-non-literal-regexp": "warn",
      "security/detect-unsafe-regex": "error",
      "security/detect-buffer-noassert": "error",
      "security/detect-eval-with-expression": "error",
      "security/detect-pseudoRandomBytes": "warn",

      // Jest specific rules
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },
];
