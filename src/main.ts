import * as core from '@actions/core'
import * as github from '@actions/github'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    let siteName = core.getInput('site_name')
    if (!siteName) {
      siteName = github.context.repo.repo
      core.debug(`outputs.name set to default value "${siteName}"`)
    } else {
      core.debug(`outputs.name value from inputs is "${siteName}"`)
    }

    let siteUrl = core.getInput('site_url')
    if (!siteUrl) {
      siteUrl = `https://${github.context.repo.owner}.github.io/${github.context.repo.repo}/`
      core.debug(`outputs.url set to default value "${siteUrl}"`)
    } else {
      core.debug(`outputs.url value from inputs is "${siteUrl}"`)
    }

    core.debug(`site_name: ${core.getInput('site_name')}`)
    core.setOutput('name', siteName)
    core.setOutput('url', siteUrl)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}
