export default defineEventHandler((event) => {
  const { lab3ServerMessage } = useRuntimeConfig(event)
  return { message: lab3ServerMessage || 'hello from the server (fallback)' }
})
