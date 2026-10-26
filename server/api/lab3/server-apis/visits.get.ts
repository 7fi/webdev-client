import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'

const COUNTER_FILE = path.join(os.tmpdir(), 'lab3-visits.txt')

export default defineEventHandler(async () => {
  let visits = 0
  try {
    visits = Number(await fs.readFile(COUNTER_FILE, 'utf8')) || 0
  } catch {
    visits = 0
  }
  visits += 1
  try {
    await fs.writeFile(COUNTER_FILE, String(visits))
  } catch (error) {
    console.error('Could not save the visit count:', error)
  }
  return { visits, counterFile: COUNTER_FILE }
})
