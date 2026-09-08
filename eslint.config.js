import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import pluginVue from 'eslint-plugin-vue';
import unusedImports from 'eslint-plugin-unused-imports';
import prettierConfig from '@vue/eslint-config-prettier';
import globals from 'globals';

export default defineConfig([
  globalIgnores(['dist/**', 'dist-ssr/**', 'coverage/**']),

  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,cjs,jsx,vue}']
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  prettierConfig,

  {
    name: 'app/settings',
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser
      }
    },
    plugins: {
      'unused-imports': unusedImports
    },
    rules: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ]
    }
  }
]);
