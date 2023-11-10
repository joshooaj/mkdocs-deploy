import * as core from '@actions/core'
import * as main from '../src/main'

const runMock = jest.spyOn(main, 'run')

// Mock the GitHub Actions core library
let debugMock: jest.SpyInstance
let errorMock: jest.SpyInstance
let getInputMock: jest.SpyInstance
let setOutputMock: jest.SpyInstance

// Mock the GitHub Actions github context
jest.mock('@actions/github', () => ({
  context: {
    repo: {
      owner: 'joshooaj',
      repo: 'mkdocs-deploy'
    }
  }
}))

describe('action', () => {
  beforeEach(() => {
    jest.clearAllMocks()

    debugMock = jest.spyOn(core, 'debug').mockImplementation()
    errorMock = jest.spyOn(core, 'error').mockImplementation()
    getInputMock = jest.spyOn(core, 'getInput').mockImplementation()
    setOutputMock = jest.spyOn(core, 'setOutput').mockImplementation()
  })

  it('sets the expected outputs', async () => {
    getInputMock.mockImplementation((name: string): string => {
      switch (name) {
        case 'site_name':
          return 'mkdocs-deploy'
        case 'site_url':
          return 'https://joshooaj.github.io/mkdocs-deploy/'
        default:
          return ''
      }
    })

    await main.run()
    expect(runMock).toHaveReturned()

    // Verify that all of the core library functions were called correctly
    expect(debugMock).toHaveBeenNthCalledWith(
      1,
      'outputs.name value from inputs is "mkdocs-deploy"'
    )
    expect(debugMock).toHaveBeenNthCalledWith(
      2,
      'outputs.url value from inputs is "https://joshooaj.github.io/mkdocs-deploy/"'
    )
    expect(debugMock).toHaveBeenNthCalledWith(3, 'site_name: mkdocs-deploy')
    expect(setOutputMock).toHaveBeenNthCalledWith(
      1,
      'name',
      expect.stringMatching('mkdocs-deploy')
    )
    expect(setOutputMock).toHaveBeenNthCalledWith(
      2,
      'url',
      expect.stringMatching('https://joshooaj.github.io/mkdocs-deploy/')
    )
    expect(errorMock).not.toHaveBeenCalled()
  })
})
