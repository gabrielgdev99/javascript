// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,

  react.configs.flat.recommended,

  reactHooks.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    ignores: ["node_modules/**", "dist/**", "build/**"],

    languageOptions: {
      parser: require.resolve("@babel/eslint-parser"),
      parserOptions: {
        requireConfigFile: false,
        babelOptions: { presets: ["@babel/preset-react"] },
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: { ...globals.browser, ...globals.node },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
    },

    settings: {
      react: { version: "detect" },
    },

    rules: {
      "prettier/prettier": "error",
      "react/jsx-filename-extension": 0,
      "import/prefer-default-export": 0,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },

    extends: [prettier],
  },
]);
