module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // Permitir arquivos react com js
    "react/jsx-props-no-spreading": [<enabled>, { // permitir spread (...)
      "html": "ignore" | "enforce",
      "custom": "ignore" | "enforce",
      "explicitSpread": "ignore" | "enforce",
      "exceptions": [<string/>]
    }],
  },
};
