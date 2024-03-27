module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['@rocketseat/eslint-config/react'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['@react-three','react-refresh', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/no-unknown-property": 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  },
}
