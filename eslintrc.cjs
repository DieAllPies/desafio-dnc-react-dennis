module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // your custom rules here (if any)
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
