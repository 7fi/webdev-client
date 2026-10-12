// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  // Tailwind is wired into the build here, but no CSS is loaded globally.
  // Lab components import their own Tailwind stylesheets.
  vite: {
    plugins: [tailwindcss()]
  }
})
