import process from 'node:process'
import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'color-scheme', content: 'dark' },
      ],
      htmlAttrs: {
        class: 'dark',
      },
    },
  },
  nitro: {
    preset: 'node',
  },
  devServer: {
    port: Number.parseInt(process.env.PORT || '8080'),
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode', '@nuxt/icon'],
  colorMode: {
    classSuffix: '',
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
