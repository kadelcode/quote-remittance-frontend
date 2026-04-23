import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default [
  // 1. Ignore build files
  {
    ignores: ['node_modules', 'dist', 'build', 'coverage'],
  },

  // 2. Base JS rules
  js.configs.recommended,

  // 3. TypeScript (SAFE VERSION - NO CRASHES)
  ...tseslint.configs.recommended,

  // 4. React + Import rules
  {
    files: ['**/*.{ts,tsx,js,jsx}'],

    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      // React safety
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Import organization
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // Clean code rules
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-duplicate-imports': 'error',
      'prefer-const': 'warn',

      // TS safe unused vars
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },

  // 5. Prettier MUST be last
  prettier,
];
