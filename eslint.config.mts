import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import jest from "eslint-plugin-jest";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import jsoncParser from "jsonc-eslint-parser";

const jsTsFiles = ["**/*.{js,ts}"];
const jsonFiles = ["**/*.{json,jsonc,json5}"];

export default [
  {
    ignores: [
      "dist/",
      "node_modules/",
      ".git/",
      "coverage/",
      "src/generated/**",
    ],
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.node } },
  {
    files: jsonFiles,
    languageOptions: { parser: jsoncParser },
  },
  { ...pluginJs.configs.recommended, files: jsTsFiles },
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: jsTsFiles,
  })),
  {
    files: ["src/tests/**/*.{js,ts}"],
    ...jest.configs["flat/recommended"],
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
    },
  },
  {
    files: jsTsFiles,
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  eslintPluginPrettierRecommended,
  {
    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
  },
];
