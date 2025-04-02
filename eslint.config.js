import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import prettierPlugin from 'eslint-plugin-prettier'

const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
}

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        // Puedes añadir más globales aquí si lo necesitas
      },
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    plugins: { js, prettier: prettierPlugin },
    extends: ['js/recommended'],
  },
  tseslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  // Añade este nuevo objeto para tus reglas personalizadas
  {
    files: ['**/*.{js,ts,vue}'],
    rules: {
      'no-undef': RULES.OFF,
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      'vue/first-attribute-linebreak': RULES.OFF,
      'no-unused-vars': [RULES.OFF],
      'arrow-spacing': [RULES.ERROR],
      'object-curly-spacing': [RULES.ERROR, 'always'],
      'array-callback-return': [RULES.OFF, { checkForEach: true }],
      'vue/require-default-prop': RULES.OFF,
      'vue/singleline-html-element-content-newline': 0,
      'vue/component-name-in-template-casing': [RULES.ERROR, 'PascalCase'],
      'vue/html-quotes': [RULES.ERROR, 'double', { avoidEscape: true }],
      'vue/mustache-interpolation-spacing': [RULES.ERROR, 'always'],
      'vue/no-multi-spaces': [
        RULES.ERROR,
        {
          ignoreProperties: false,
        },
      ],
      'vue/no-spaces-around-equal-signs-in-attribute': [RULES.ERROR],
      'vue/v-on-style': [RULES.ERROR, 'shorthand'],
      'vue/v-bind-style': [RULES.ERROR, 'shorthand'],
      'vue/multi-word-component-names': RULES.OFF,
      'no-return-assign': RULES.OFF,
      'no-mixed-operators': RULES.OFF,
      'vue/no-setup-props-destructure': RULES.OFF,
      'vue/no-v-text-v-html-on-component': RULES.OFF,
    },
  },
])
