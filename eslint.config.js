import eslintConfigNext from 'eslint-config-next'

export default [
  ...eslintConfigNext(),
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'error',
      'import/order': [
        'error',
        {
          'groups': [['builtin', 'external', 'internal']],
          'newlines-between': 'always'
        }
      ]
    }
  }
]
