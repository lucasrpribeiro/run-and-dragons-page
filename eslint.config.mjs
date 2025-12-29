import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu(
    {
      unocss: false,
      imports: false,
      vue: {
        overrides: {
          'vue/no-restricted-syntax': ['error', {
            selector: 'VElement[name=\'a\']',
            message: 'Use NuxtLink instead.',
          }],
        },
      },
    },
    {
      rules: {
        'no-undef': 'error',
        'node/prefer-global/process': 'off',
        'ts/no-require-imports': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/html-self-closing': ['error', {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
        }],
        'vue/html-indent': ['error', 2],
        'vue/max-attributes-per-line': ['error', {
          singleline: 3,
          multiline: 1,
        }],
      },
    },
  ),
)
