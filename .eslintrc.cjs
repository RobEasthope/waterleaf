module.exports = {
  extends: [
    '@thoughtbot/eslint-config',
    '@thoughtbot/eslint-config/typescript',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
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
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching testing files!
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
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
