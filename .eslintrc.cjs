module.exports = {
  extends: [
    '@thoughtbot/eslint-config',
    '@thoughtbot/eslint-config/typescript',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
    'testing-library',
  ],
  ignorePatterns: ['node_modules', 'build', '.cache'],
  plugins: ['prettier', 'simple-import-sort'],
  overrides: [
    {
      // No default exports other than in root files and routes
      files: ['./app/*/*.{js,jsx,ts,tsx}'],
      excludedFiles: ['./app/routes/**'],
      rules: {
        'import/no-default-export': 'error',
      },
    },
  ],
  rules: {
    'no-underscore-dangle': ['error', { allow: ['_id', '_ref', '_key'] }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'import/prefer-default-export': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        trailingComma: 'all',
        singleQuote: true,
      },
    ],
  },
};
