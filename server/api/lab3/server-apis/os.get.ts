import os from 'node:os'

export default defineEventHandler(() => ({
  hostname: os.hostname(),
  platform: os.platform(),
  uptimeMinutes: Math.round(os.uptime() / 60),
  cpuCount: os.cpus().length,
  freeMemoryMB: Math.round(os.freemem() / 1024 / 1024),
}))
