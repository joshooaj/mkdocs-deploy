import * as core from '@actions/core'
import * as github from '@actions/github'
import * as yaml from 'js-yaml'
import fs from 'fs'
import { exec, ExecOptions } from '@actions/exec'
import { getMkDocsProjects } from './mkdocs-projects'

class CustomTag {
  type: string | undefined
  data: string
  constructor(type: string | undefined, data: string) {
    this.type = type
    this.data = data
  }
}

const tags = [
  new yaml.Type('!', {
    kind: 'scalar',
    multi: true,
    representName: (obj: any) => {
      obj.type
    },
    represent: (obj: any) => {
      obj.data
    },
    instanceOf: CustomTag,
    construct: (data, type) => {
      return new CustomTag(type, data)
    }
  }),
  new yaml.Type('!', {
    kind: 'sequence',
    multi: true,
    representName: (obj: any) => {
      obj.type
    },
    represent: (obj: any) => {
      obj.data
    },
    instanceOf: CustomTag,
    construct: (data, type) => {
      return new CustomTag(type, data)
    }
  }),
  new yaml.Type('!', {
    kind: 'mapping',
    multi: true,
    representName: (obj: any) => {
      obj.type
    },
    represent: (obj: any) => {
      obj.data
    },
    instanceOf: CustomTag,
    construct: (data, type) => {
      return new CustomTag(type, data)
    }
  })
]

const LAZY_SCHEMA = yaml.DEFAULT_SCHEMA.extend(tags)

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const themes = getMkDocsProjects().filter(p => p.labels.includes('theme'))

    let config: any = null
    let configFile = core.getInput('config_file')
    if (configFile) {
      core.debug(`Loading mkdocs configuration file: ${configFile}`)
      config = yaml.load(fs.readFileSync(configFile, 'utf8'), {
        schema: LAZY_SCHEMA
      })
    } else {
      config = await createConfig()
      configFile = 'mkdocs.yml'
      core.debug(`Saving generated mkdocs config file to ${configFile}`)
      fs.writeFileSync(
        configFile,
        yaml.dump(config, { schema: LAZY_SCHEMA }),
        'utf8'
      )
    }
    core.debug(
      `Contents of mkdocs.yml:\n${yaml.dump(config, { schema: LAZY_SCHEMA })}`
    )

    // Install requirements
    await pipInstallPackages(['mkdocs'])
    const requirementsFile = core.getInput('requirements_file')
    if (requirementsFile) {
      core.debug(`Installing dependencies from file "${requirementsFile}"`)
      await pipInstallFromFile(requirementsFile)
    } else {
      if (!['mkdocs', 'readthedocs'].includes(config.theme.name)) {
        // Community-maintained list of the most commonly used themes
        // https://raw.githubusercontent.com/mkdocs/catalog/main/projects.yaml
        const theme = themes.find(t => t.mkdocs_theme === config.theme.name)
        if (theme) {
          core.debug(
            `Installing theme "${theme.mkdocs_theme}" with pypi id "${theme.pypi_id}"`
          )
          await pipInstallPackages([theme.pypi_id])
        } else {
          throw new Error(`
          MkDocs theme "${config.theme.name}" not found in catalog: https://github.com/mkdocs/catalog/
          `)
        }
      }
    }

    if (core.getInput('deploy').toLowerCase() === 'true') {
      await deploy(configFile)
    } else {
      await build(configFile)
    }
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

function createConfig(): any {
  return {
    site_name: core.getInput('site_name') || github.context.repo.repo,
    site_description: core.getInput('site_description'),
    site_url:
      core.getInput('site_url') ||
      `https://${github.context.repo.owner}.github.io/${github.context.repo.repo}/`,
    docs_dir: core
      .getInput('docs_dir')
      .replace(/^\/\\/, '')
      .replace(/\/\\$/, ''),
    repo_name:
      core.getInput('repo_name') ||
      `${github.context.repo.owner}/${github.context.repo.repo}`,
    repo_url:
      core.getInput('repo_url') ||
      `https://${github.context.repo.owner}.github.io/${github.context.repo.repo}/`,
    remote_branch: core.getInput('remote_branch'),
    theme: {
      name: core.getInput('theme')
    }
  }
}

async function pipInstallFromFile(filename: string): Promise<void> {
  const options: ExecOptions = {
    listeners: {
      stdout: (data: Buffer) => {
        core.info(data.toString())
      },
      stderr: (data: Buffer) => {
        core.warning(data.toString())
      }
    },
    silent: false,
    ignoreReturnCode: false
  }
  await exec('pip', ['install', '-r', filename], options)
}

async function pipInstallPackages(packages: string[]): Promise<void> {
  const options: ExecOptions = {
    listeners: {
      stdout: (data: Buffer) => {
        core.info(data.toString())
      },
      stderr: (data: Buffer) => {
        core.warning(data.toString())
      }
    },
    silent: false,
    ignoreReturnCode: false
  }
  const args = ['install'].concat(packages)
  await exec('pip', args, options)
}

async function deploy(configFile: string): Promise<void> {
  const options: ExecOptions = {
    listeners: {
      stdout: (data: Buffer) => {
        core.info(data.toString())
      },
      stderr: (data: Buffer) => {
        core.warning(data.toString())
      }
    },
    silent: false,
    ignoreReturnCode: false
  }
  const args = ['gh-deploy', '--config-file', configFile]
  await exec('mkdocs', args, options)
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
    silent: false,
    ignoreReturnCode: false
  }
  const args = ['build', '--config-file', configFile]
  await exec('mkdocs', args, options)
}
