import { includeIgnoreFile } from '@eslint/compat';
import astro from 'eslint-plugin-astro';
import astro_parser from 'astro-eslint-parser';
import prettier from 'eslint-plugin-prettier/recommended';
import ts_parser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  includeIgnoreFile(path.resolve(__dirname, '.gitignore')),
  ...astro.configs.recommended,
  ...astro.configs['jsx-a11y-recommended'],
  prettier,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astro_parser,
      parserOptions: {
        parser: ts_parser,
        extraFileExtensions: ['.astro'],
      },
    },
  },
  {
    files: ['**/*.astro/*.ts', '*.astro/*.ts'],
    rules: { 'prettier/prettier': 'off' },
  },
];
