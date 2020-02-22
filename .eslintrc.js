module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  rules: {
    "react-hooks/rules-of-hooks": 1,
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "return" }
    ],
    "max-depth": ["error", { "max": 3 }],
    "no-unneeded-ternary": ["error", { "defaultAssignment": false }],
    "simple-import-sort/sort": "warn",
    "sort-imports": "warn",
    "import/order": "off",
    "require-yield": 1,
    "@typescript-eslint/camelcase": [1, { "properties": "always" }],
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/no-empty-interface": 1,
    "@typescript-eslint/no-empty-function": 1
  },
  settings: {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
};

