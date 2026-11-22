// Same-app route served by Nuxt at /api/lab5/hello (not the Express /lab5/welcome)
export default defineEventHandler(() => ({ message: 'Hello from Lab 5 API!' }))
