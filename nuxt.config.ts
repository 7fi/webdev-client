// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  // vue3-icons uses directory imports ('../lib') that Node ESM can't resolve
  // at runtime, so bundle it instead of leaving it as an external import.
  build: {
    transpile: ['vue3-icons']
  },
  // Tailwind is wired into the build here, but no CSS is loaded globally.
  // Lab components import their own Tailwind stylesheets.
  vite: {
    plugins: [tailwindcss()]
  }
})
