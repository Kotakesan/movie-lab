import { defineNuxtConfig } from 'nuxt'
const { API_KEY, BASE_URL } = process.env

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', 'mdi/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  runtimeConfig: {
    apiKey: API_KEY,
    baseUrl: BASE_URL,
  },
})
