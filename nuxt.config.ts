// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  // Server-only; set with NUXT_LAB3_SERVER_MESSAGE. Keys under `public` would reach the browser.
  runtimeConfig: {
    lab3ServerMessage: '',
  },
  // Source files aren't deployed with the server (e.g. on Vercel), so bundle
  // app/labs/lab3 into it for the Server Component Demo. Path is relative to server/.
  nitro: {
    serverAssets: [{ baseName: 'lab3', dir: '../app/labs/lab3' }],
  },
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
