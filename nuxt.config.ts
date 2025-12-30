import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
  ],

  fonts: {
    families: [
      { name: 'Cinzel', provider: 'google', weights: ['400', '600', '700'] },
      { name: 'Crimson Text', provider: 'google', weights: ['400', '600'] },
    ],
  },
})
