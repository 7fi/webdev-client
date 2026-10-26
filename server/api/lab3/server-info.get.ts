import fs from 'node:fs'
import path from 'node:path'

export default defineEventHandler(() => {
  const platform = process.platform
  const nodeVersion = process.version
  const arch = process.arch
  const pid = process.pid
  const serverRenderTime = new Date().toLocaleTimeString()
  const lab3Dir = path.join(process.cwd(), 'app/labs/lab3')
  let files: string[] = []
  try {
    files = fs.readdirSync(lab3Dir)
  } catch (error) {
    console.error('Error reading lab3 directory:', error)
    files = []
  }
  return { info: { platform, nodeVersion, serverRenderTime, arch, pid }, files }
})
