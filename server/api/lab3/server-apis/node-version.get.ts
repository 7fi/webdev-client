import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)

export default defineEventHandler(async () => {
  try {
    const { stdout } = await execFileAsync('node', ['--version'])
    return { output: stdout.trim() }
  } catch (error) {
    return { output: `Could not run node: ${error instanceof Error ? error.message : 'unknown error'}` }
  }
})
