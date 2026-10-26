export default defineEventHandler(async () => {
  const platform = process.platform
  const nodeVersion = process.version
  const arch = process.arch
  const pid = process.pid
  const serverRenderTime = new Date().toLocaleTimeString()
  let files: string[] = []
  try {
    // Keys are paths with ':' separators (e.g. 'todos:TodoList.vue'); keep the top level like readdirSync.
    const keys = await useStorage('assets:lab3').getKeys()
    files = [...new Set(keys.map((key) => key.split(':')[0]!))].sort()
  } catch (error) {
    console.error('Error reading lab3 directory:', error)
    files = []
  }
  return { info: { platform, nodeVersion, serverRenderTime, arch, pid }, files }
})
