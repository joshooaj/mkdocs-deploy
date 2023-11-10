import * as core from '@actions/core'
import { exec, ExecOptions } from '@actions/exec'

export async function installMkdocs(): Promise<string> {
  let stdout = ''
  const options: ExecOptions = {
    listeners: {
      stdout: (data: Buffer) => {
        stdout += data.toString()
      }
    },
    silent: true,
    ignoreReturnCode: true
  }

  const exitCode = await exec('pip', ['install', '-y', 'mkdocs'], options)
  core.debug(`installMkdocs exit code: ${exitCode}`)
  return stdout
}
