export default defineEventHandler(() => ({
  serverTime: new Date().toLocaleTimeString('en-US', { timeZone: 'UTC' }),
}))
