import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.{js,cjs}"],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs", // <- habilita require/module.exports
      globals: {
        ...globals.node,       // <- habilita process, __dirname, module etc
      },
    },
  },
];
