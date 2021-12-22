module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 8,
  },
  ignorePatterns: ["node_modules/*", ".next/*"],
  extends: ["eslint:recommended"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      settings: {
        react: {
          version: "detect",
        },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
      ],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
        "react/prop-types": "off",
        "react/jsx-curly-brace-presence": 2,
        "react/display-name": "off",
        "react/react-in-jsx-scope": "off",
      },
    },
  ],
};
