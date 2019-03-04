{
  'root': true,
  'parserOptions': {
    'ecmaFeatures': {
        'jsx': true
    },
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true
  },
  'extends': 'eslint:recommended',
  'plugins': ['vue'],
  'rules': {
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'space-before-blocks': ['warn', 'always'],
    'vue/jsx-uses-vars': 2,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  }
}
