module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'eslint:recommended',
        "plugin:vue/vue3-essential",
        '@vue/typescript/recommended',
        'plugin:prettier/recommended',
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        'prettier/prettier': [
            'warn',
            {
              singleQuote: true,
              semi: true,
              endOfLine: 'auto',
              trailingComma: 'none'
            }
        ],
        '@typescript-eslint/no-empty-interface': 'off',
    },
    overrides: [
        {
          files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
          env: {
            jest: true
          }
        }
    ]
}
