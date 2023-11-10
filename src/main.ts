import * as core from '@actions/core'
import * as github from '@actions/github'
import yaml from 'js-yaml'
import fs from 'fs'
import { exec, ExecOptions } from '@actions/exec'
import { getProjectsYaml } from './mkdocs-projects'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    type MkDocsProject = {
      name: string
      mkdocs_theme: string
      pypi_id: string
      labels: Array<string>
    }
    type MkDocsProjects = { projects: Array<MkDocsProject> }
    const themes = (
      yaml.load(getProjectsYaml()) as MkDocsProjects
    ).projects.filter(p => {
      p.labels.includes('theme')
    })

    let config: any = null
    let configFile = core.getInput('config_file')
    if (configFile) {
      config = yaml.load(fs.readFileSync(configFile, 'utf8'))
    } else {
      config = await createConfig()
      configFile = 'mkdocs.yml'
      fs.writeFileSync(configFile, yaml.dump(config), 'utf8')
    }
    core.debug(`mkdocs.yml:\\n${yaml.dump(config)}`)

    // Install requirements
    let requirementsFile = core.getInput('requirements_file')
    if (requirementsFile) {
      await pipInstallFromFile(requirementsFile)
    } else {
      if (!['mkdocs', 'readthedocs'].includes(config.theme.name)) {
        // Community-maintained list of the most commonly used themes
        // https://raw.githubusercontent.com/mkdocs/catalog/main/projects.yaml
        const theme = themes.find(t => t.mkdocs_theme === config.theme.name)
        if (theme) {
          await pipInstallPackages([theme.pypi_id])
        } else {
          throw `MkDocs theme "${config.theme.name}" not found in catalog: https://github.com/mkdocs/catalog/`
        }
      }
    }

    await build(configFile)
    core.setOutput('mkdocs-config', yaml.dump(config))
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

function createConfig(): any {
  return {
    site_name: core.getInput('site_name') ?? github.context.repo.repo,
    site_description: core.getInput('site_description'),
    site_url:
      core.getInput('site_url') ??
      `https://${github.context.repo.owner}.github.io/${github.context.repo.repo}/`,
    docs_dir: core
      .getInput('docs_dir')
      .replace(/^\/\\/, '')
      .replace(/\/\\$/, ''),
    repo_name:
      core.getInput('repo_name') ??
      `${github.context.repo.owner}/${github.context.repo.repo}`,
    repo_url:
      core.getInput('repo_url') ??
      `https://${github.context.repo.owner}.github.io/${github.context.repo.repo}/`,
    remote_branch: core.getInput('remote_branch'),
    theme: {
      name: core.getInput('theme')
    }
  }
}

async function pipInstallFromFile(filename: string): Promise<void> {
  let stdout = ''
  let stderr = ''
  const options: ExecOptions = {
    listeners: {
      stdout: (data: Buffer) => {
        stdout += data.toString()
      },
      stderr: (data: Buffer) => {
        stderr += data.toString()
      }
    },
    silent: true,
    ignoreReturnCode: false
  }
  await exec('pip', ['install', '-r', filename], options)
}

async function pipInstallPackages(packages: Array<string>): Promise<void> {
  const options: ExecOptions = {
    listeners: {
      stdout: (data: Buffer) => {
        core.info(data.toString())
      },
      stderr: (data: Buffer) => {
        core.warning(data.toString())
      }
    },
    silent: true,
    ignoreReturnCode: false
  }
  let args = ['install'].concat(packages)
  await exec('pip', args, options)
}

async function build(configFile: string): Promise<void> {
  const options: ExecOptions = {
    listeners: {
      stdout: (data: Buffer) => {
        core.info(data.toString())
      },
      stderr: (data: Buffer) => {
        core.warning(data.toString())
      }
    },
    silent: true,
    ignoreReturnCode: false
  }
  let args = ['build', '--config-file', configFile]
  await exec('mkdocs', args, options)
}
