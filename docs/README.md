# mkdocs-deploy
[![GitHub Super-Linter](https://github.com/actions/typescript-action/actions/workflows/linter.yml/badge.svg)](https://github.com/super-linter/super-linter)
![CI](https://github.com/actions/typescript-action/actions/workflows/ci.yml/badge.svg)
[![Check dist/](https://github.com/actions/typescript-action/actions/workflows/check-dist.yml/badge.svg)](https://github.com/actions/typescript-action/actions/workflows/check-dist.yml)
[![CodeQL](https://github.com/actions/typescript-action/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/actions/typescript-action/actions/workflows/codeql-analysis.yml)

This action converts your markdown content to a static website and publishes it
to GitHub Pages using [mkdocs](https://www.mkdocs.org/) by:

- building a simple `mkdocs.yml` at run-time unless you bring your own
- installing mkdocs, and the specified theme, or your own requirements based on
  the contents `requirements_file` for example
- executing `mkdocs gh-deploy` to build a static site from the contents of
  `docs_dir`, and pushing the site to `remote_branch` on your repository.

## Usage

See [action.yml](https://github.com/joshooaj/mkdocs-deploy/blob/main/action.yml)

### Basic

Ensure your GitHub repository has a `docs/` directory at the root with at least
an `index.md` or `readme.md` file in it, and add the `mkdocs-deploy` action to
your workflow.

```yaml
steps:
- uses: actions/checkout@v4
- uses: joshooaj/mkdocs-deploy@v1
```

An `mkdocs.yml` file will be generated at runtime with some values determined
based on the workflow context. For example, here is what the default mkdocs
configuration looks like for this repository:

```yaml
site_name: mkdocs-deploy
site_description: ''
site_url: https://joshooaj.github.io/mkdocs-deploy/
docs_dir: docs
repo_name: joshooaj/mkdocs-deploy
repo_url: https://joshooaj.github.io/mkdocs-deploy/
remote_branch: gh-pages
theme:
  name: material
```

### Using inputs

You can customize your site using the available inputs, and even provide your
own `mkdocs.yml` configuration file and `requirements.txt` file.

```yaml
- uses: joshooaj/mkdocs-deploy@v1
  with:
    # Optional: The name of your own mkdocs configuration file (usually mkdocs.yml).
    # When provided, most other inputs will be ignored.
    config_file: ''

    # Optional: The name of your own Python requirements file. If provided, it
    # should include all Python packages required by your mkdocs configuration
    # including "mkdocs" and your chosen theme. The command "pip install -r <requirements_file>"
    # will be executed.
    requirements_file: ''
    
    # Optional: The name or title of the mkdocs site. If value is not specified,
    # the site name will match the repository name from the github context.
    # Ignored if "config_file" is specified.
    site_name: ''
    
    # Optional: The URL of the published mkdocs site. If value is not specified,
    # the URL is generated from the github context with the pattern "https://<owner>.github.io/<repo>".
    # Ignored if "config_file" is specified.
    site_url: ''

    # Optional: Name of the GitHub repository associated with the mkdocs site.
    # If value is not specified, the value is retrieved from the github context.
    # Ignored if "config_file" is specified.
    repo_name: ''
    
    # Optional: The directory representing the root of your site. The default
    # value is "docs".
    # Ignored if "config_file" is specified.
    docs_dir: 'docs'

    # Optional: Name of the branch on which to publish the mkdocs site. The
    # default value is "gh-pages". Ignored if "config_file" is specified.
    remote_branch: 'gh-pages'
    
    # Optional: Name of the mkdocs theme to use when generating the mkdocs site.
    # The default value is "material". See https://squidfunk.github.io/mkdocs-material/
    # for detailed information on the features available with this theme. For
    # other available themes, see https://github.com/mkdocs/catalog/ and specifically
    # be sure to use the value of "mkdocs_theme" for the theme of your choice which
    # is found in https://github.com/mkdocs/catalog/blob/main/projects.yaml.
    # Ignored if "config_file" is specified.
    theme: 'material'

    # Optional: Set the value to "false" when you want to execute "mkdocs build"
    # instead of "mkdocs gh-deploy". This can be useful to validate that your
    # site builds successfully without pushing to GitHub Pages, or to build a
    # site to deploy to a different static website host in a later step such as
    # Netlify or Azure Static Web Apps.
    deploy: true
```

## License

The scripts and documentation in this project are released under the [MIT License](https://github.com/joshooaj/mkdocs-deploy/blob/main/LICENSE)

## Code of Conduct

:wave: Be nice. See [our code of conduct](https://github.com/joshooaj/mkdocs-deploy/blob/main/CODE_OF_CONDUCT.md)
