module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
  },
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks'],
  ignorePatterns: ['dist/*'],
  rules: {
    'react/no-unescaped-entities': 0,
    'no-console': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'no-underscore-dangle': 'off',
    'react/jsx-pascal-case': [0, { allowAllCaps: true }],
    'import/extensions': [
      'off',
      {
        ignorePackages: true,
      },
    ],
  },
};
