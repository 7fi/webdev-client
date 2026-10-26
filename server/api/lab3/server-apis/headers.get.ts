export default defineEventHandler((event) => {
  const userAgent = getRequestHeader(event, 'user-agent') ?? '(none)'
  const forwardedFor = getRequestHeader(event, 'x-forwarded-for')
  const ip = forwardedFor?.split(',')[0]?.trim() ?? '(unknown, e.g. on localhost)'
  return { userAgent, ip }
})
