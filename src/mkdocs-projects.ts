export function getProjectsYaml(): string {
  // Source: https://github.com/mkdocs/catalog/blob/main/projects.yaml
  return `
configuration:
    markdown_header_file: "config/header.md"
    markdown_footer_file: "config/footer.md"
    max_description_length: 1000  # don't truncate descriptions
    min_stars: 20
    min_projectrank: 5
    require_license: false
    project_inactive_months: 12
    project_dead_months: 99999  # "dead" is a somewhat strong assumption, so we avoid making it

categories:
- category: theming
    title: 🎨 Theming
- category: api-docs
    title: 💻 API documentation building
- category: blogging
    title: 💬 Blogging
- category: charts
    title: 📊 Charts, Images, Tables & Graphs
- category: code-exec-templating
    title: 🤖 Code execution, variables & templating
- category: git-info
    title: 🌲 Git repos & info
- category: html-css
    title: 🌈 HTML processing & CSS styling
- category: integrations
    title: 📎 Integrations with other tools
- category: i18n-l10n
    title: 🌍 Internationalization & localization
- category: links-refs
    title: 🔗 Links & references
- category: markdown
    title: 🧩 Markdown extensions
- category: nav-pages
    title: 🧭 Navigation & page building
- category: quality
    title: ✅ Quality checks (code blocks, spelling, etc.)
- category: search-toc
    title: 🔍 Search & tables of content
- category: site-conversion
    title: 🍱 Site conversion (PDF/ePUB/etc.)
- category: site-management
    title: 🔧 Site management
- category: snippets-include
    title: 📁 Snippets & includes (reusing contents)
- category: other
    title: 👽 Other

labels:
- label: plugin
    image: https://cdn.icon-icons.com/icons2/1465/PNG/512/701electricplug_100845.png
    description: MkDocs plugin
- label: theme
    image: https://cdn.icon-icons.com/icons2/1495/PNG/512/preferencesdesktoptheme_102980.png
    description: MkDocs theme
- label: project
    image: https://cdn.icon-icons.com/icons2/1448/PNG/512/42498factory_99134.png
    description: Mkdocs-based project (website, templates, etc.)
- label: markdown
    image: https://cdn.icon-icons.com/icons2/1459/PNG/512/2799201-jigsaw-processing_99781.png
    description: Markdown extension(s)

projects:
- name: Material for MkDocs
    mkdocs_theme: material
    mkdocs_plugin: [material/blog, material/group, material/offline, material/search, material/social, material/tags]
    extra_dependencies:
    plugins.social: mkdocs-material[imaging]
    github_id: squidfunk/mkdocs-material
    pypi_id: mkdocs-material
    labels: [theme, plugin]
    category: theming
- name: Cinder
    mkdocs_theme: cinder
    github_id: chrissimpkins/cinder
    pypi_id: mkdocs-cinder
    labels: [theme]
    category: theming
- name: Windmill
    mkdocs_theme: windmill
    github_id: gristlabs/mkdocs-windmill
    pypi_id: mkdocs-windmill
    labels: [theme]
    category: theming
- name: Windmill Dark
    mkdocs_theme: windmill-dark
    github_id: noraj/mkdocs-windmill-dark
    pypi_id: mkdocs-windmill-dark
    labels: [theme]
    category: theming
- name: mkdocs-rtl
    github_id: mberneti/mkdocs-rtl
    labels: []
    category: theming
- name: docSkimmer
    mkdocs_theme: docskimmer
    github_id: hfagerlund/mkdocs-docskimmer
    labels: [theme]
    category: theming
- name: mkdocs-theme-topdf
    mkdocs_theme: topdf
    github_id: kuri65536/mkdocs-theme-topdf
    pypi_id: mkdocs-theme-topdf
    labels: [theme]
    category: theming
- name: KPN for MkDocs
    mkdocs_theme: kpn
    github_id: kpn/mkdocs-kpn-theme
    pypi_id: mkdocs-kpn
    labels: [theme]
    category: theming
- name: CustomMill
    mkdocs_theme: custommill
    github_id: Siphalor/mkdocs-custommill
    pypi_id: mkdocs-custommill
    labels: [theme]
    category: theming
- name: Bootstrap 4
    mkdocs_theme: bootstrap4
    mkdocs_plugin: [bootstrap4-blockquotes, bootstrap4-tables]
    shadowed: [mkdocs_theme]
    github_id: LukeCarrier/mkdocs-theme-bootstrap4
    pypi_id: mkdocs-theme-bootstrap4
    labels: [theme]
    category: theming
- name: Nature
    mkdocs_theme: nature
    github_id: waylan/mkdocs-nature
    pypi_id: mkdocs-nature
    labels: [theme]
    category: theming
- name: GitHub
    mkdocs_theme: github
    github_id: g3xx/mkdocs-Github
    pypi_id: mkdocs-github
    labels: [theme]
    category: theming
- name: Bootswatch
    mkdocs_theme: [cerulean, cosmo, cyborg, darkly, flatly, journal, litera, lumen, lux, materia, minty, pulse, sandstone, simplex, slate, solar, spacelab, superhero, united, yeti]
    github_id: mkdocs/mkdocs-bootswatch
    pypi_id: mkdocs-bootswatch
    labels: [theme]
    category: theming
- name: Bootstrap
    mkdocs_theme: bootstrap
    github_id: mkdocs/mkdocs-bootstrap
    pypi_id: mkdocs-bootstrap
    labels: [theme]
    category: theming
- name: BOOTSTRAP386
    mkdocs_theme: bootstrap386
    gitlab_id: lramage/mkdocs-bootstrap386
    pypi_id: mkdocs-bootstrap386
    labels: [theme]
    category: theming
- name: GitBook
    mkdocs_theme: gitbook
    gitlab_id: lramage/mkdocs-gitbook-theme
    pypi_id: mkdocs-gitbook
    labels: [theme]
    category: theming
- name: Ivory
    mkdocs_theme: ivory
    github_id: daizutabi/mkdocs-ivory
    pypi_id: mkdocs-ivory
    labels: [theme]
    category: theming
- name: SWAN
    mkdocs_theme: swan
    github_id: swan-cern/mkdocs-swan
    pypi_id: mkdocs-swan
    labels: [theme]
    category: theming
- name: Zettelkasten
    mkdocs_theme: zettelkasten-solarized-light
    mkdocs_plugin: [zettelkasten]
    github_id: buvis-net/mkdocs-zettelkasten
    pypi_id: mkdocs-zettelkasten
    labels: [theme]
    category: theming
- name: Cluster
    mkdocs_theme: cluster
    description: Another bootstrap theme for MkDocs
    gitlab_id: kaliko/mkdocs-cluster
    pypi_id: mkdocs-cluster
    labels: [theme]
    category: theming
- name: Moonstone
    mkdocs_theme: moonstone
    github_id: byrnereese/mkdocs-moonstone
    pypi_id: mkdocs-moonstone
    labels: [theme]
    category: theming
- name: Alabaster
    mkdocs_theme: alabaster
    github_id: notpushkin/mkdocs-alabaster
    pypi_id: mkdocs-alabaster
    labels: [theme]
    category: theming
- name: Simple Blog
    mkdocs_theme: simple-blog
    github_id: FernandoCelmer/mkdocs-simple-blog
    pypi_id: mkdocs-simple-blog
    labels: [theme]
    category: theming
- name: Terminal for MkDocs
    mkdocs_theme: terminal
    mkdocs_plugin: [terminal/md-to-html]
    github_id: ntno/mkdocs-terminal
    pypi_id: mkdocs-terminal
    labels: [theme]
    category: theming
- name: Dracula
    mkdocs_theme: dracula
    github_id: dracula/mkdocs
    pypi_id: mkdocs-dracula-theme
    labels: [theme]
    category: theming
- name: Risonia
    mkdocs_theme: risonia
    mkdocs_plugin: [risonia/color-theme, risonia/w3css-classes]
    github_id: unverbuggt/mkdocs-risonia-theme
    pypi_id: mkdocs-risonia-theme
    labels: [theme]
    category: theming
- name: MkDocs Basic Theme
    mkdocs_theme: basictheme
    github_id: mkdocs/mkdocs-basic-theme
    pypi_id: mkdocs-basic-theme
    labels: [theme]
    category: theming

- name: automacdoc
    github_id: AlexandreKempf/automacdoc
    pypi_id: automacdoc
    labels: []
    category: api-docs
- name: mkdocstrings
    mkdocs_plugin: mkdocstrings
    extra_dependencies:
    plugins.mkdocstrings.handlers.crystal: mkdocstrings-crystal
    plugins.mkdocstrings.handlers.python: mkdocstrings-python
    github_id: mkdocstrings/mkdocstrings
    pypi_id: mkdocstrings
    labels: [plugin]
    category: api-docs
- name: MkAutoDoc
    markdown_extension: mkautodoc
    github_id: tomchristie/mkautodoc
    pypi_id: mkautodoc
    labels: [markdown]
    license: BSD
    category: api-docs
- name: doxygen
    mkdocs_plugin: doxygen
    github_id: pieterdavid/mkdocs-doxygen-plugin
    labels: [plugin]
    category: api-docs
- name: inari
    mkdocs_plugin: inari
    github_id: tkamenoko/inari
    pypi_id: inari
    labels: [plugin]
    category: api-docs
- name: mktheapidocs
    mkdocs_plugin: mktheapidocs
    github_id: greenape/mktheapidocs
    pypi_id: mktheapidocs
    labels: [plugin]
    category: api-docs
- name: MkApi
    mkdocs_plugin: mkapi
    github_id: daizutabi/mkapi
    pypi_id: mkapi
    labels: [plugin]
    category: api-docs
- name: mkdocs-yaarg-plugin
    mkdocs_plugin: yaarg
    github_id: g6123/mkdocs-yaarg-plugin
    pypi_id: mkdocs-yaarg-plugin
    labels: [plugin]
    category: api-docs
- name: mkdocs-click
    markdown_extension: mkdocs-click
    github_id: DataDog/mkdocs-click
    pypi_id: mkdocs-click
    labels: [markdown]
    category: api-docs
- name: ansible-document
    description: Auto-generate ansible role documentation
    pypi_id: ansible-mkdocs
    labels: []
    category: api-docs
- name: MkDocsOAD
    mkdocs_plugin: [neoteroi.mkdocsoad, neoteroi.contribs]
    markdown_extension: [neoteroi.cards, neoteroi.timeline, neoteroi.projects, neoteroi.spantable]
    description: Plugin for MkDocs to generate human readable documentation from OpenAPI Documentation Version 3 (also known as Swagger documentation).
    github_id: Neoteroi/mkdocs-plugins
    pypi_id: neoteroi-mkdocs
    labels: [plugin, markdown]
    category: api-docs
- name: mkdocs-typer
    markdown_extension: mkdocs-typer
    github_id: bruce-szalwinski/mkdocs-typer
    pypi_id: mkdocs-typer
    labels: [markdown]
    category: api-docs
- name: mkdoxy
    mkdocs_plugin: mkdoxy
    github_id: JakubAndrysek/MkDoxy
    pypi_id: mkdoxy
    labels: [plugin]
    category: api-docs
- name: mkdocs-typedoc
    mkdocs_plugin: typedoc
    github_id: JakubAndrysek/mkdocs-typedoc
    pypi_id: mkdocs-typedoc
    labels: [plugin]
    category: api-docs

- name: blog
    mkdocs_plugin: blog
    github_id: andyoakley/mkdocs-blog
    labels: [plugin]
    category: blogging
- name: Blogs for MkDocs
    mkdocs_plugin: blog
    github_id: fmaida/mkdocs-blog-plugin
    pypi_id: mkdocs-blog-plugin
    labels: [plugin]
    category: blogging
    shadowed: [mkdocs_plugin]
- name: rss
    mkdocs_plugin: rss
    github_id: Guts/mkdocs-rss-plugin
    pypi_id: mkdocs-rss-plugin
    labels: [plugin]
    category: blogging
- name: newsletter
    mkdocs_plugin: mkdocs-newsletter
    github_id: lyz-code/mkdocs-newsletter
    pypi_id: mkdocs-newsletter
    labels: [plugin]
    category: blogging
- name: mkdocs-blogging-plugin
    mkdocs_plugin: blogging
    github_id: liang2kl/mkdocs-blogging-plugin
    pypi_id: mkdocs-blogging-plugin
    labels: [plugin]
    category: blogging
- name: python-mkblog
    mkdocs_plugin: mkblog
    github_id: derJD/python-mkblog
    pypi_id: mkblog
    labels: [plugin]
    category: blogging

- name: table-reader
    mkdocs_plugin: table-reader
    github_id: timvink/mkdocs-table-reader-plugin
    pypi_id: mkdocs-table-reader-plugin
    labels: [plugin]
    category: charts
- name: charts
    mkdocs_plugin: charts
    github_id: timvink/mkdocs-charts-plugin
    pypi_id: mkdocs-charts-plugin
    labels: [plugin]
    category: charts
- name: drawio-exporter
    mkdocs_plugin: drawio-exporter
    github_id: LukeCarrier/mkdocs-drawio-exporter
    pypi_id: mkdocs-drawio-exporter
    labels: [plugin]
    category: charts
- name: markdownmermaid
    mkdocs_plugin: markdownmermaid
    description: A MkDocs plugin that support mermaid graph in markdown file
    github_id: pugong/mkdocs-mermaid-plugin
    pypi_id: mkdocs-mermaid-plugin
    labels: [plugin]
    category: charts
- name: mermaid2
    mkdocs_plugin: mermaid2
    github_id: fralau/mkdocs-mermaid2-plugin
    pypi_id: mkdocs-mermaid2-plugin
    labels: [plugin]
    category: charts
- name: markdownwavedrom
    mkdocs_plugin: markdownwavedrom
    github_id: kuri65536/mkdocs-wavedrom-plugin
    pypi_id: mkdocs-wavedrom-plugin
    labels: [plugin]
    category: charts
- name: build-plantuml
    mkdocs_plugin: build_plantuml
    github_id: quantorconsulting/mkdocs_build_plantuml
    pypi_id: mkdocs-build-plantuml-plugin
    labels: [plugin]
    category: charts
- name: sequence-js
    mkdocs_plugin: sequence-js
    github_id: fcannizzaro/mkdocs-sequence-js-plugin
    labels: [plugin]
    category: charts
- name: kroki
    mkdocs_plugin: kroki
    github_id: AVATEAM-IT-SYSTEMHAUS/mkdocs-kroki-plugin
    pypi_id: mkdocs-kroki-plugin
    labels: [plugin]
    category: charts
- name: MkDocs Img2Fig Plugin
    mkdocs_plugin: img2fig
    github_id: stuebersystems/mkdocs-img2fig-plugin
    pypi_id: mkdocs-img2fig-plugin
    labels: [plugin]
    category: charts
- name: MkDocs Video
    mkdocs_plugin: mkdocs-video
    github_id: soulless-viewer/mkdocs-video
    pypi_id: mkdocs-video
    labels: [plugin]
    category: charts
- name: MkDocs Graphviz
    markdown_extension: mkdocs_graphviz
    gitlab_id: rodrigo.schwencke/mkdocs-graphviz
    pypi_id: mkdocs-graphviz
    labels: [markdown]
    category: charts
- name: mkdocs-diagrams
    mkdocs_plugin: diagrams
    github_id: zoni/mkdocs-diagrams
    pypi_id: mkdocs-diagrams
    labels: [plugin]
    category: charts
- name: docutools
    mkdocs_plugin: [lcd-find-pages, lcd-custom-dir, lcd-blacklist, lcd-lp, lcd-md-replace, lcd-page-tree, lcd-stats]
    github_id: axiros/docutools
    pypi_id: docutools
    labels: [plugin]
    category: charts
- name: markdown-figcap
    markdown_extension: markdown_figcap
    github_id: funk1d/markdown-figcap
    pypi_id: markdown-figcap
    labels: [markdown]
    category: charts
- name: MkHack3rs
    description: Hacks & Integrations for Mkdocs / Material Theme
    homepage: https://eskool.gitlab.io/mkhack3rs/
    gitlab_id: eskool/mkhack3rs
    labels: [project]
    category: charts
- name: Termage
    mkdocs_plugin: termage
    github_id: bczsalba/Termage
    pypi_id: mkdocs-termage-plugin
    labels: [plugin]
    category: charts
- name: MkDocs GLightbox
    mkdocs_plugin: glightbox
    github_id: blueswen/mkdocs-glightbox
    pypi_id: mkdocs-glightbox
    labels: [plugin]
    category: charts
- name: import-statement
    mkdocs_plugin: import-statement
    github_id: Rj40x40/mkdocs-import-statement-plugin
    pypi_id: mkdocs-import-statement-plugin
    labels: [plugin]
    category: charts
- name: plotly charts
    mkdocs_plugin: plotly
    github_id: haoda-li/mkdocs-plotly-plugin
    pypi_id: mkdocs-plotly-plugin
    labels: [plugin]
    category: charts
- name: Lightgallery
    markdown_extension: lightgallery
    github_id: g-provost/lightgallery-markdown
    pypi_id: lightgallery
    labels: [markdown]
    category: charts
- name: Markdown blockdiag
    markdown_extension: markdown_blockdiag
    github_id: gisce/markdown-blockdiag
    pypi_id: markdown-blockdiag
    labels: [markdown]
    category: charts
- name: mkdocs-resize-images
    mkdocs_plugin: resize-images
    github_id: JakubAndrysek/mkdocs-resize-images
    pypi_id: mkdocs-resize-images
    labels: [plugin]
    category: charts
- name: plantuml-markdown
    markdown_extension: plantuml_markdown
    github_id: mikitex70/plantuml-markdown
    pypi_id: plantuml-markdown
    labels: [markdown]
    category: charts
- name: markdown-captions
    markdown_extension: markdown_captions
    github_id: Evidlo/markdown_captions
    pypi_id: markdown-captions
    labels: [markdown]
    category: charts

- name: pheasant
    mkdocs_plugin: pheasant
    github_id: daizutabi/pheasant
    pypi_id: pheasant
    labels: [plugin]
    category: code-exec-templating
- name: macros
    mkdocs_plugin: macros
    github_id: fralau/mkdocs_macros_plugin
    pypi_id: mkdocs-macros-plugin
    labels: [plugin]
    license: MIT
    category: code-exec-templating
- name: markdownextradata
    mkdocs_plugin: markdownextradata
    github_id: rosscdh/mkdocs-markdownextradata-plugin
    pypi_id: mkdocs-markdownextradata-plugin
    labels: [plugin]
    category: code-exec-templating
- name: jinja2sandbox
    mkdocs_plugin: jinja2sandbox
    github_id: rkoe/mkdocs-jinja2sandbox
    labels: [plugin]
    category: code-exec-templating
- name: gen-files
    mkdocs_plugin: gen-files
    github_id: oprypin/mkdocs-gen-files
    pypi_id: mkdocs-gen-files
    labels: [plugin]
    category: code-exec-templating
- name: mkdocs-markmap
    mkdocs_plugin: markmap
    github_id: markmap/mkdocs-markmap
    pypi_id: mkdocs-markmap
    labels: [plugin]
    category: code-exec-templating
- name: nbconvert
    mkdocs_plugin: nbconvert
    github_id: tanbro/mkdocs-nbconvert
    pypi_id: mkdocs-nbconvert
    labels: [plugin]
    category: code-exec-templating
- name: mknotebooks
    mkdocs_plugin: mknotebooks
    github_id: greenape/mknotebooks
    pypi_id: mknotebooks
    labels: [plugin]
    category: code-exec-templating
- name: mkdocs-jupyter
    mkdocs_plugin: mkdocs-jupyter
    github_id: danielfrg/mkdocs-jupyter
    pypi_id: mkdocs-jupyter
    labels: [plugin]
    category: code-exec-templating
- name: codeyaml
    mkdocs_plugin: codeyaml
    github_id: textileio/mkdocs-codeyaml-plugin
    pypi_id: mkdocs-codeyaml-plugin
    labels: [plugin]
    license: MIT
    category: code-exec-templating
- name: markdown-filter
    mkdocs_plugin: markdown-filter
    github_id: byrnereese/mkdocs-markdown-filter
    pypi_id: mkdocs-markdown-filter
    labels: [plugin]
    category: code-exec-templating
- name: user-defined-values
    mkdocs_plugin: user-defined-values
    github_id: rahult/mkdocs-user-defined-values
    pypi_id: mkdocs-user-defined-values
    labels: [plugin]
    license: MIT
    category: code-exec-templating
- name: mkdocs_protobuf
    mkdocs_plugin: mkdocs_protobuf
    description: Mkdocs plugin to render protobuf messages
    github_id: rymurr/mkdocs-protobuf
    pypi_id: mkdocs-protobuf
    labels: [plugin]
    license: Apache-2
    category: code-exec-templating
- name: markdown-exec
    mkdocs_plugin: markdown-exec
    github_id: pawamoy/markdown-exec
    pypi_id: markdown-exec
    labels: [plugin]
    category: code-exec-templating
- name: mkjsfiddle
    mkdocs_plugin: jsfiddle
    github_id: stadiamaps/mkjsfiddle
    pypi_id: mkjsfiddle
    labels: [plugin]
    category: code-exec-templating
- name: meta-manager
    mkdocs_plugin: meta-manager
    github_id: timmeinerzhagen/mkdocs-meta-manager
    pypi_id: mkdocs-meta-manager
    labels: [plugin]
    category: code-exec-templating
- name: Entangled
    mkdocs_plugin: entangled
    github_id: entangled/mkdocs-plugin
    pypi_id: mkdocs-entangled-plugin
    labels: [plugin]
    category: code-exec-templating
- name: Termynal
    mkdocs_plugin: termynal
    github_id: mkdocs-plugins/termynal
    pypi_id: termynal
    labels: [plugin]
    category: code-exec-templating

- name: branchcustomization
    mkdocs_plugin: branchcustomization
    github_id: effigies/mkdocs-branchcustomization-plugin
    pypi_id: mkdocs-branchcustomization-plugin
    labels: [plugin]
    category: git-info
- name: git-revision-date-localized
    mkdocs_plugin: git-revision-date-localized
    github_id: timvink/mkdocs-git-revision-date-localized-plugin
    pypi_id: mkdocs-git-revision-date-localized-plugin
    labels: [plugin]
    category: git-info
- name: git-revision-date
    mkdocs_plugin: git-revision-date
    github_id: zhaoterryy/mkdocs-git-revision-date-plugin
    pypi_id: mkdocs-git-revision-date-plugin
    labels: [plugin]
    category: git-info
- name: git-authors
    mkdocs_plugin: git-authors
    github_id: timvink/mkdocs-git-authors-plugin
    pypi_id: mkdocs-git-authors-plugin
    labels: [plugin]
    category: git-info
- name: git-committers-2
    mkdocs_plugin: git-committers
    description: An MkDocs plugin to create a list of contributors on the page
    github_id: ojacques/mkdocs-git-committers-plugin-2
    pypi_id: mkdocs-git-committers-plugin-2
    labels: [plugin]
    category: git-info
- name: git-committers
    mkdocs_plugin: git-committers
    shadowed: [mkdocs_plugin]
    github_id: byrnereese/mkdocs-git-committers-plugin
    pypi_id: mkdocs-git-committers-plugin
    labels: [plugin]
    category: git-info
- name: git-latest-release
    mkdocs_plugin: git-latest-release
    github_id: agarthetiger/mkdocs_latest_release_plugin
    pypi_id: mkdocs-latest-release-plugin
    labels: [plugin]
    category: git-info
- name: Github-Links
    markdown_extension: mdx_gh_links
    github_id: Python-Markdown/github-links
    pypi_id: mdx-gh-links
    labels: [markdown]
    category: git-info

- name: docstyler
    mkdocs_plugin: docstyler
    github_id: hfagerlund/mkdocs-docstyler-plugin
    labels: [plugin]
    category: html-css
- name: mkdocs-add-teaser
    mkdocs_plugin: mkdocs-add-teaser
    github_id: wilhelmer/mkdocs-add-teaser
    pypi_id: mkdocs-add-teaser
    labels: [plugin]
    category: html-css
- name: mkdocs_safe_text
    mkdocs_plugin: mkdocs_safe_text
    github_id: raimon49/mkdocs-safe-text-plugin
    pypi_id: mkdocs-safe-text-plugin
    labels: [plugin]
    category: html-css
- name: minify
    mkdocs_plugin: minify
    github_id: byrnereese/mkdocs-minify-plugin
    pypi_id: mkdocs-minify-plugin
    labels: [plugin]
    category: html-css
- name: bootstrap-tables
    mkdocs_plugin: bootstrap-tables
    github_id: byrnereese/mkdocs-bootstrap-tables-plugin
    pypi_id: mkdocs-bootstrap-tables-plugin
    labels: [plugin]
    category: html-css
- name: add-number
    mkdocs_plugin: add-number
    github_id: ignorantshr/mkdocs-add-number-plugin
    pypi_id: mkdocs-add-number-plugin
    labels: [plugin]
    category: html-css
- name: enumerate-headings
    mkdocs_plugin: enumerate-headings
    github_id: timvink/mkdocs-enumerate-headings-plugin
    pypi_id: mkdocs-enumerate-headings-plugin
    labels: [plugin]
    category: html-css
- name: minify-html
    mkdocs_plugin: minify_html
    github_id: monosans/mkdocs-minify-html-plugin
    pypi_id: mkdocs-minify-html-plugin
    labels: [plugin]
    category: html-css
- name: toggle-sidebar
    mkdocs_plugin: toggle-sidebar
    github_id: six-two/mkdocs-toggle-sidebar-plugin
    pypi_id: mkdocs-toggle-sidebar-plugin
    labels: [plugin]
    category: html-css
- name: mkdocs-extra-sass-plugin
    mkdocs_plugin: extra-sass
    github_id: orzih/mkdocs-extra-sass-plugin
    pypi_id: mkdocs-extra-sass-plugin
    labels: [plugin]
    category: html-css

- name: static-i18n
    mkdocs_plugin: i18n
    github_id: ultrabug/mkdocs-static-i18n
    pypi_id: mkdocs-static-i18n
    labels: [plugin]
    category: i18n-l10n
- name: mkdocs-mdpo
    mkdocs_plugin: mdpo
    github_id: mondeja/mkdocs-mdpo-plugin
    pypi_id: mkdocs-mdpo-plugin
    labels: [plugin]
    category: i18n-l10n
- name: Mkdocs translations plugin
    mkdocs_plugin: translations
    description: Internationalization plugin for mkdocs
    pypi_id: mkdocs-translations
    labels: [plugin]
    category: i18n-l10n

- name: swagger
    mkdocs_plugin: swagger
    github_id: allevo/mkdocs-swagger-plugin
    labels: [plugin]
    category: integrations
- name: mkdocs-render-swagger-plugin
    mkdocs_plugin: render_swagger
    github_id: bharel/mkdocs-render-swagger-plugin
    pypi_id: mkdocs-render-swagger-plugin
    labels: [plugin]
    category: integrations
- name: factsheet
    mkdocs_plugin: factsheet
    github_id: inuits/mkdocs-factsheet
    labels: [plugin]
    category: integrations
- name: mkdocs-coverage
    mkdocs_plugin: coverage
    github_id: pawamoy/mkdocs-coverage
    pypi_id: mkdocs-coverage
    labels: [plugin]
    category: integrations
- name: MkDocs Backend for Foliant
    github_id: foliant-docs/foliantcontrib.mkdocs
    pypi_id: foliantcontrib.mkdocs
    labels: []
    category: integrations
- name: MkDocs Swagger UI Tag
    mkdocs_plugin: swagger-ui-tag
    github_id: blueswen/mkdocs-swagger-ui-tag
    pypi_id: mkdocs-swagger-ui-tag
    labels: [plugin]
    category: integrations

- name: Autolink References
    mkdocs_plugin: autolink_references
    github_id: theskumar/autolink-references-mkdocs-plugin
    pypi_id: autolink-references-mkdocs-plugin
    labels: [plugin]
    category: links-refs
- name: autorefs
    mkdocs_plugin: autorefs
    github_id: mkdocstrings/autorefs
    pypi_id: mkdocs-autorefs
    labels: [plugin]
    category: links-refs
- name: ezlinks
    mkdocs_plugin: ezlinks
    github_id: orbikm/mkdocs-ezlinks-plugin
    pypi_id: mkdocs-ezlinks-plugin
    labels: [plugin]
    category: links-refs
- name: autoreflinks
    mkdocs_plugin: autoreflinks
    github_id: pauloue/mkdocs-autoreflinks-plugin
    labels: [plugin]
    category: links-refs
- name: autolinks
    mkdocs_plugin: autolinks
    github_id: midnightprioriem/mkdocs-autolinks-plugin
    pypi_id: mkdocs-autolinks-plugin
    labels: [plugin]
    category: links-refs
- name: ezglossary
    mkdocs_plugin: ezglossary
    github_id: realtimeprojects/mkdocs-ezglossary
    pypi_id: mkdocs-ezglossary-plugin
    labels: [plugin]
    category: links-refs
- name: roamlinks
    mkdocs_plugin: roamlinks
    github_id: Jackiexiao/mkdocs-roamlinks-plugin
    pypi_id: mkdocs-roamlinks-plugin
    labels: [plugin]
    category: links-refs
- name: abs-to-rel
    mkdocs_plugin: abs-to-rel
    github_id: sander76/mkdocs-abs-rel-plugin
    pypi_id: mkdocs-abs-rel-plugin
    labels: [plugin]
    category: links-refs
- name: webcontext
    mkdocs_plugin: webcontext
    github_id: Darrelk/mkdocs-webcontext-plugin
    pypi_id: mkdocs-webcontext-plugin
    labels: [plugin]
    category: links-refs
- name: Mkdocs-Addresses
    mkdocs_plugin: mkdocs-addresses
    gitlab_id: frederic.zinelli/mkdocs-addresses
    pypi_id: mkdocs-addresses
    labels: [plugin]
    category: links-refs
- name: emailprotect
    mkdocs_plugin: emailprotect
    github_id: rkoe/mkdocs-emailprotect
    labels: [plugin]
    category: links-refs
- name: mkdocs-redirects
    mkdocs_plugin: redirects
    github_id: mkdocs/mkdocs-redirects
    pypi_id: mkdocs-redirects
    labels: [plugin]
    category: links-refs
- name: htmlproofer
    mkdocs_plugin: htmlproofer
    github_id: manuzhang/mkdocs-htmlproofer-plugin
    pypi_id: mkdocs-htmlproofer-plugin
    labels: [plugin]
    category: links-refs
- name: tooltipster-links
    mkdocs_plugin: tooltipster-links
    github_id: midnightprioriem/mkdocs-tooltipster-links-plugin
    pypi_id: mkdocs-tooltipster-links-plugin
    labels: [plugin]
    category: links-refs
- name: alternate-link
    mkdocs_plugin: alternate-link
    github_id: cmitu/mkdocs-altlink-plugin
    labels: [plugin]
    category: links-refs
- name: mkdocs-alias-plugin
    mkdocs_plugin: alias
    github_id: eddyluten/mkdocs-alias-plugin
    pypi_id: mkdocs-alias-plugin
    labels: [plugin]
    category: links-refs
- name: Wikilink Plus
    markdown_extension: mdx_wikilink_plus
    github_id: neurobin/mdx_wikilink_plus
    pypi_id: mdx-wikilink-plus
    labels: [markdown]
    category: links-refs
- name: unused-files
    mkdocs_plugin: unused_files
    github_id: wilhelmer/mkdocs-unused-files
    pypi_id: mkdocs-unused-files
    labels: [plugin]
    category: links-refs
- name: link-marker
    mkdocs_plugin: link-marker
    github_id: timmeinerzhagen/mkdocs-link-marker
    pypi_id: mkdocs-link-marker
    labels: [plugin]
    category: links-refs
- name: mkdocs-open-in-new-tab
    mkdocs_plugin: open-in-new-tab
    github_id: JakubAndrysek/mkdocs-open-in-new-tab
    pypi_id: mkdocs-open-in-new-tab
    labels: [plugin]
    category: links-refs
- name: mkdocs-site-urls
    mkdocs_plugin: site-urls
    github_id: OctoPrint/mkdocs-site-urls
    pypi_id: mkdocs-site-urls
    labels: [plugin]
    category: links-refs

- name: markdown-callouts
    markdown_extension: callouts
    github_id: oprypin/markdown-callouts
    pypi_id: markdown-callouts
    labels: [markdown]
    category: markdown
- name: mkdocs-callouts
    mkdocs_plugin: callouts
    github_id: sondregronas/mkdocs-callouts
    pypi_id: mkdocs-callouts
    labels: [plugin]
    category: markdown
- name: PyMdown Extensions
    markdown_extension: [pymdownx.arithmatex, pymdownx.b64, pymdownx.betterem, pymdownx.blocks.admonition, pymdownx.blocks.definition, pymdownx.blocks.details, pymdownx.blocks.html, pymdownx.blocks.tab, pymdownx.caret, pymdownx.critic, pymdownx.details, pymdownx.emoji, pymdownx.escapeall, pymdownx.extra, pymdownx.highlight, pymdownx.inlinehilite, pymdownx.keys, pymdownx.magiclink, pymdownx.mark, pymdownx.pathconverter, pymdownx.progressbar, pymdownx.saneheaders, pymdownx.smartsymbols, pymdownx.snippets, pymdownx.striphtml, pymdownx.superfences, pymdownx.tabbed, pymdownx.tasklist, pymdownx.tilde]
    github_id: facelessuser/pymdown-extensions
    pypi_id: pymdown-extensions
    labels: [markdown]
    category: markdown
- name: Math extension
    markdown_extension: mdx_math
    github_id: mitya57/python-markdown-math
    pypi_id: python-markdown-math
    labels: [markdown]
    category: markdown
- name: Mdx Truly Sane Lists
    markdown_extension: mdx_truly_sane_lists
    github_id: radude/mdx_truly_sane_lists
    pypi_id: mdx-truly-sane-lists
    labels: [markdown]
    category: markdown
- name: Breakless Lists
    markdown_extension: mdx_breakless_lists
    github_id: adamb70/mdx-breakless-lists
    pypi_id: mdx-breakless-lists
    labels: [markdown]
    category: markdown
- name: Tweetable quotes
    markdown_extension: tweetable.extension
    github_id: max-arnold/markdown-tweetable
    pypi_id: markdown-tweetable
    labels: [markdown]
    category: markdown
- name: markdown-del-ins
    markdown_extension: markdown_del_ins
    github_id: honzajavorek/markdown-del-ins
    pypi_id: markdown-del-ins
    labels: [markdown]
    category: markdown
- name: mkpatcher
    markdown_extension: mkpatcher
    github_id: ofek/mkpatcher
    pypi_id: mkpatcher
    labels: [markdown]
    category: markdown
- name: YAML metadata
    markdown_extension: full_yaml_metadata
    github_id: sivakov512/python-markdown-full-yaml-metadata
    pypi_id: markdown-full-yaml-metadata
    labels: [markdown]
    category: markdown
- name: HEARTBEATS Flavored Markdown
    markdown_extension: [hbfm.inline_coloring, hbfm.inline_list, hbfm.number_headers, hbfm.quote_uri_hash]
    github_id: heartbeatsjp/markdown-extension-hbfm
    pypi_id: hbfm
    labels: [markdown]
    category: markdown
- name: Markdown Inline Graphviz
    markdown_extension: markdown_inline_graphviz
    github_id: cesaremorel/markdown-inline-graphviz
    pypi_id: markdown-inline-graphviz-extension
    labels: [markdown]
    category: markdown
- name: markdown-katex
    markdown_extension: markdown_katex
    gitlab_id: mbarkhau/markdown-katex
    pypi_id: markdown-katex
    labels: [markdown]
    category: markdown
- name: python-asciimathml
    markdown_extension: mdx_asciimathml
    github_id: ShadowKyogre/python-asciimathml
    pypi_id: asciimathml
    labels: [markdown]
    category: markdown
- name: Django Static Image
    markdown_extension: django_static_image
    bitbucket_id: melvinkcx/markdown-extension-django-static-image
    pypi_id: markdown-djangostaticimage
    labels: [markdown]
    category: markdown
- name: markdown-icons
    markdown_extension: iconfonts
    github_id: MadLittleMods/markdown-icons
    pypi_id: markdown-iconfonts
    labels: [markdown]
    category: markdown
- name: MarkdownSuperscript
    markdown_extension: superscript
    github_id: jambonrose/markdown_superscript_extension
    pypi_id: MarkdownSuperscript
    labels: [markdown]
    category: markdown
- name: MarkdownSubscript
    markdown_extension: subscript
    github_id: jambonrose/markdown_subscript_extension
    pypi_id: MarkdownSubscript
    labels: [markdown]
    category: markdown
- name: markdown_sub_sup
    markdown_extension: markdown_sub_sup
    github_id: alberic89/markdown_sub_sup
    pypi_id: markdown-sub-sup
    labels: [markdown]
    category: markdown
- name: KBD Extension
    markdown_extension: kbdextension
    github_id: RickTalken/kbdextension
    pypi_id: kbdextension
    labels: [markdown]
    category: markdown
- name: markdown-emdash
    markdown_extension: mdx_emdash
    github_id: czue/markdown-emdash
    pypi_id: markdown-emdash
    labels: [markdown]
    category: markdown
- name: Semantic Data Extension
    markdown_extension: mdx_semanticdata
    github_id: aleray/mdx_semanticdata
    pypi_id: mdx-semanticdata
    labels: [markdown]
    category: markdown
- name: Semantic WikiLinks Extension
    markdown_extension: mdx_semanticwikilinks
    github_id: aleray/mdx_semanticwikilinks
    pypi_id: mdx-semanticwikilinks
    labels: [markdown]
    category: markdown
- name: Cite Extension
    markdown_extension: mdx_cite
    github_id: aleray/mdx_cite
    pypi_id: mdx-cite
    labels: [markdown]
    category: markdown
- name: Markdown Grid Tables
    markdown_extension: markdown_grid_tables
    gitlab_id: WillDaSilva/markdown_grid_tables
    pypi_id: markdown-grid-tables
    labels: [markdown]
    category: markdown
- name: Markdown Checklist
    markdown_extension: markdown_checklist.extension
    github_id: FND/markdown-checklist
    pypi_id: markdown-checklist
    labels: [markdown]
    category: markdown
- name: caption
    markdown_extension: [caption, image_captions, table_captions]
    github_id: flywire/caption
    labels: [markdown]
    category: markdown

- name: exclude
    mkdocs_plugin: exclude
    github_id: apenwarr/mkdocs-exclude
    pypi_id: mkdocs-exclude
    labels: [plugin]
    category: nav-pages
- name: select-files
    mkdocs_plugin: select-files
    description: Filter pages for assignments
    github_id: supcik/mkdocs-select-files
    pypi_id: mkdocs-select-files
    labels: [plugin]
    category: nav-pages
- name: awesome-pages
    mkdocs_plugin: awesome-pages
    github_id: lukasgeiter/mkdocs-awesome-pages-plugin
    pypi_id: mkdocs-awesome-pages-plugin
    labels: [plugin]
    category: nav-pages
- name: mkdocs-nav-enhancements
    mkdocs_plugin: mkdocs-nav-enhancements
    github_id: Rylon/mkdocs-nav-enhancements
    pypi_id: mkdocs-nav-enhancements
    labels: [plugin]
    category: nav-pages
- name: section-index
    mkdocs_plugin: section-index
    github_id: oprypin/mkdocs-section-index
    pypi_id: mkdocs-section-index
    labels: [plugin]
    category: nav-pages
- name: literate-nav
    mkdocs_plugin: literate-nav
    github_id: oprypin/mkdocs-literate-nav
    pypi_id: mkdocs-literate-nav
    labels: [plugin]
    category: nav-pages
- name: encryptcontent
    mkdocs_plugin: encryptcontent
    github_id: CoinK0in/mkdocs-encryptcontent-plugin
    pypi_id: mkdocs-encryptcontent-plugin
    labels: [plugin]
    category: nav-pages
- name: awesome-list
    mkdocs_plugin: awesome-list
    github_id: carlosperate/mkdocs-awesome-list-plugin
    labels: [plugin]
    category: nav-pages
- name: toc-sidebar
    mkdocs_plugin: toc-sidebar
    github_id: midnightprioriem/mkdocs-toc-sidebar-plugin
    pypi_id: mkdocs-toc-sidebar-plugin
    labels: [plugin]
    category: nav-pages
- name: mkdocs-simple-hooks
    mkdocs_plugin: mkdocs-simple-hooks
    github_id: aklajnert/mkdocs-simple-hooks
    pypi_id: mkdocs-simple-hooks
    labels: [plugin]
    category: nav-pages
- name: schema-reader
    mkdocs_plugin: schema_reader
    github_id: magicaljellybeans/mkdocs_schema_reader
    pypi_id: mkdocs-schema-reader
    labels: [plugin]
    license: MIT
    category: nav-pages
- name: pagenav-generator
    mkdocs_plugin: pagenav-generator
    github_id: Andre601/mkdocs-pagenav-generator
    labels: [plugin]
    license: MIT
    category: nav-pages
- name: mkdocs-categories-plugin
    mkdocs_plugin: categories
    github_id: eddyluten/mkdocs-categories-plugin
    pypi_id: mkdocs-categories-plugin
    labels: [plugin]
    category: nav-pages
- name: filename-title
    mkdocs_plugin: filename_title
    github_id: mipro98/mkdocs-filename-title-plugin
    labels: [plugin]
    category: nav-pages
- name: mkdocs-title-casing-plugin
    mkdocs_plugin: title-casing
    github_id: Rusty3141/mkdocs-title-casing-plugin
    pypi_id: mkdocs-title-casing-plugin
    labels: [plugin]
    category: nav-pages
- name: MkRefs
    mkdocs_plugin: mkrefs
    github_id: DerwenAI/mkrefs
    pypi_id: mkrefs
    labels: [plugin]
    category: nav-pages
- name: mkdocs-pug
    # mkdocs_plugin: mkdocs-pug
    # https://github.com/vzhong/mkdocs_pug/issues/1
    github_id: vzhong/mkdocs_pug
    pypi_id: mkdocs-pug
    labels: []
    category: nav-pages
- name: SWAN Gallery
    mkdocs_plugin: swangallery
    github_id: swan-cern/mkdocs-swangallery
    pypi_id: mkdocs-swangallery
    labels: [plugin]
    category: nav-pages
- name: mkdocs-gallery
    mkdocs_plugin: gallery
    github_id: smarie/mkdocs-gallery
    pypi_id: mkdocs-gallery
    labels: [plugin]
    category: nav-pages
- name: mkdocs-copy
    mkdocs_plugin: copy
    github_id: chikamichi/mkdocs-copy
    pypi_id: mkdocs-copy
    labels: [plugin]
    category: nav-pages
- name: file-filter
    mkdocs_plugin: file-filter
    github_id: DariuszPorowski/mkdocs-file-filter-plugin
    pypi_id: mkdocs-file-filter-plugin
    labels: [plugin]
    category: nav-pages
- name: mkdocs-nav-weight
    mkdocs_plugin: mkdocs-nav-weight
    github_id: shu307/mkdocs-nav-weight
    pypi_id: mkdocs-nav-weight
    labels: [plugin]
    category: nav-pages
- name: mkdocs-live-edit-plugin
    mkdocs_plugin: live-edit
    github_id: eddyluten/mkdocs-live-edit-plugin
    pypi_id: mkdocs-live-edit-plugin
    labels: [plugin]
    category: nav-pages
- name: include directory to navigation
    mkdocs_plugin: include_dir_to_nav
    github_id: mysiki/mkdocs_include_dir_to_nav
    pypi_id: mkdocs-include-dir-to-nav
    labels: [plugin]
    category: nav-pages

- name: mkdocs-spellcheck
    mkdocs_plugin: spellcheck
    github_id: pawamoy/mkdocs-spellcheck
    pypi_id: mkdocs-spellcheck
    labels: [plugin]
    category: quality
- name: mkdocs-code-validator
    mkdocs_plugin: code-validator
    github_id: oprypin/mkdocs-code-validator
    pypi_id: mkdocs-code-validator
    labels: [plugin]
    category: quality
- name: mkdocs-codecheck
    description: Traverses a directory tree looking for code samples, then attempts to validate each code sample found.
    github_id: byrnereese/codechecker-mkdocs
    pypi_id: mkdocs-codecheck
    labels: []
    category: quality
- name: Link Checker
    github_id: byrnereese/linkchecker-mkdocs
    pypi_id: mkdocs-linkcheck
    labels: []
    category: quality
- name: mktestdocs
    github_id: koaning/mktestdocs
    pypi_id: mktestdocs
    labels: []
    category: quality

- name: localsearch
    mkdocs_plugin: localsearch
    github_id: wilhelmer/mkdocs-localsearch
    pypi_id: mkdocs-localsearch
    labels: [plugin]
    category: search-toc
- name: exclude-search
    mkdocs_plugin: exclude-search
    github_id: chrieke/mkdocs-exclude-search
    pypi_id: mkdocs-exclude-search
    labels: [plugin]
    category: search-toc
- name: tags
    mkdocs_plugin: tags
    description: Processes tags in yaml metadata
    github_id: jldiaz/mkdocs-plugin-tags
    pypi_id: mkdocs-plugin-tags
    labels: [plugin]
    category: search-toc
- name: tags
    mkdocs_plugin: autotag
    github_id: six-two/mkdocs-auto-tag-plugin
    pypi_id: mkdocs-auto-tag-plugin
    labels: [plugin]
    category: search-toc

- name: mkdocs-with-pdf
    mkdocs_plugin: with-pdf
    github_id: orzih/mkdocs-with-pdf
    pypi_id: mkdocs-with-pdf
    labels: [plugin]
    category: site-conversion
- name: mkpdfs
    mkdocs_plugin: mkpdfs
    github_id: comwes/mkpdfs-mkdocs-plugin
    pypi_id: mkpdfs-mkdocs
    labels: [plugin]
    category: site-conversion
- name: pdf-export
    mkdocs_plugin: pdf-export
    github_id: zhaoterryy/mkdocs-pdf-export-plugin
    pypi_id: mkdocs-pdf-export-plugin
    labels: [plugin]
    category: site-conversion
- name: print-site
    mkdocs_plugin: print-site
    github_id: timvink/mkdocs-print-site-plugin
    pypi_id: mkdocs-print-site-plugin
    labels: [plugin]
    category: site-conversion
- name: mk2pdf-export
    mkdocs_plugin: mk2pdf-export
    github_id: HaoLiuHust/mkdocs-mk2pdf-plugin
    pypi_id: mkdocs-mk2pdf-plugin
    labels: [plugin]
    category: site-conversion
- name: pdf-with-js
    mkdocs_plugin: pdf-with-js
    github_id: smaxtec/mkdocs-pdf-with-js-plugin
    pypi_id: mkdocs-pdf-with-js-plugin
    labels: [plugin]
    category: site-conversion
- name: helm
    mkdocs_plugin: helm-repo
    github_id: M00nF1sh/mkdocs-helm
    pypi_id: mkdocs-helm
    labels: [plugin]
    category: site-conversion
- name: mkdocs-pandoc
    github_id: jgrassler/mkdocs-pandoc
    pypi_id: mkdocs-pandoc
    labels: []
    category: site-conversion
- name: mkdocs-autozip
    mkdocs_plugin: autozip
    github_id: martinohanlon/mkdocs_autozip
    pypi_id: mkdocs-autozip
    labels: [plugin]
    category: site-conversion
- name: mkdocs-zip-folders
    mkdocs_plugin: zip_folders
    github_id: JakubAndrysek/mkdocs-zip-folders
    pypi_id: mkdocs-zip-folders
    labels: [plugin]
    category: site-conversion

- name: mkdocs-multirepo-plugin
    mkdocs_plugin: multirepo
    github_id: jdoiro3/mkdocs-multirepo-plugin
    pypi_id: mkdocs-multirepo-plugin
    labels: [plugin]
    category: site-management
- name: monorepo
    mkdocs_plugin: monorepo
    github_id: backstage/mkdocs-monorepo-plugin
    pypi_id: mkdocs-monorepo-plugin
    labels: [plugin]
    category: site-management
- name: multirepo
    github_id: wilhelmer/mkdocs-multirepo
    pypi_id: mkdocs-multirepo
    labels: []
    category: site-management
- name: multiple
    mkdocs_plugin: multiple
    github_id: experimaestro/mkdocs-multiple
    pypi_id: mkdocs-multiple
    labels: [plugin]
    category: site-management
- name: simple
    mkdocs_plugin: simple
    github_id: athackst/mkdocs-simple-plugin
    pypi_id: mkdocs-simple-plugin
    labels: [plugin]
    category: site-management
- name: mkdocs-versioning
    mkdocs_plugin: mkdocs-versioning
    github_id: zayd62/mkdocs-versioning
    pypi_id: mkdocs-versioning
    labels: [plugin]
    category: site-management
- name: mike
    mkdocs_plugin: mike
    github_id: jimporter/mike
    pypi_id: mike
    labels: [plugin]
    category: site-management
- name: mkdocs-new-features-notifier
    mkdocs_plugin: mkdocs-new-features-notifier
    github_id: kevin-411/mkdocs-new-features-notifier
    pypi_id: mkdocs-new-features-notifier
    labels: [plugin]
    category: site-management
- name: progress
    mkdocs_plugin: progress
    github_id: rdilweb/mkdocs-plugin-progress
    labels: [plugin]
    category: site-management
- name: octadocs-adr
    mkdocs_plugin: octadocs_adr
    github_id: octadocs/octadocs
    pypi_id: octadocs-adr
    labels: [plugin]
    category: site-management
- name: MkDocs Merge
    github_id: ovasquez/mkdocs-merge
    pypi_id: mkdocs-merge
    labels: []
    category: site-management
- name: mkdocs-yamp
    mkdocs_plugin: yamp
    github_id: boozallen/mkdocs-yamp-plugin
    pypi_id: mkdocs-yamp
    labels: [plugin]
    category: site-management
- name: mkdocs-exclude-unused-files
    mkdocs_plugin: exclude-unused-files
    github_id: JonasDoesThings/mkdocs-exclude-unused-files
    pypi_id: mkdocs-exclude-unused-files
    labels: [plugin]
    category: site-management
- name: mkdocs-exclude-tagged-files
    mkdocs_plugin: mkdocs_exclude_tagged_files
    github_id: JonasDoesThings/mkdocs-exclude-tagged-files
    pypi_id: mkdocs-exclude-tagged-files
    labels: [plugin]
    category: site-management

- name: mkdocs-embed-external-markdown
    mkdocs_plugin: external-markdown
    github_id: fire1ce/mkdocs-embed-external-markdown
    pypi_id: mkdocs-embed-external-markdown
    labels: [plugin]
    license: MIT
    category: snippets-include
- name: codeinclude
    mkdocs_plugin: codeinclude
    description: A plugin to include code snippets into mkdocs pages
    github_id: rnorth/mkdocs-codeinclude-plugin
    pypi_id: mkdocs-codeinclude-plugin
    labels: [plugin]
    category: snippets-include
- name: snippet
    mkdocs_plugin: snippet
    github_id: mprivat/mkdocs-snippet-plugin
    pypi_id: mkdocs-snippet-plugin
    labels: [plugin]
    category: snippets-include
- name: git snippet
    mkdocs_plugin: gitsnippet
    github_id: SamazoOo/mkdocs-gitsnippet-plugin
    pypi_id: mkdocs-gitsnippet-plugin
    labels: [plugin]
    category: snippets-include
- name: include-markdown
    mkdocs_plugin: include-markdown
    github_id: mondeja/mkdocs-include-markdown-plugin
    pypi_id: mkdocs-include-markdown-plugin
    labels: [plugin]
    category: snippets-include
- name: meta-descriptions
    mkdocs_plugin: meta-descriptions
    github_id: prcr/mkdocs-meta-descriptions-plugin
    pypi_id: mkdocs-meta-descriptions-plugin
    labels: [plugin]
    category: snippets-include
- name: Markdown-Include
    markdown_extension: markdown_include.include
    github_id: cmacmackin/markdown-include
    pypi_id: markdown-include
    labels: [markdown]
    category: snippets-include
- name: Mdx Include
    markdown_extension: mdx_include
    github_id: neurobin/mdx_include
    pypi_id: mdx-include
    labels: [markdown]
    category: snippets-include
- name: mkdocs-version-annotations
    mkdocs_plugin: mkdocs-version-annotations
    github_id: glennmatthews/mkdocs-version-annotations
    pypi_id: mkdocs-version-annotations
    labels: [plugin]
    category: snippets-include

- name: bibtex
    mkdocs_plugin: bibtex
    github_id: shyamd/mkdocs-bibtex
    pypi_id: mkdocs-bibtex
    labels: [plugin]
    license: BSD-3-Clause-LBNL
    category: other
- name: pico-8
    mkdocs_plugin: pico-8
    github_id: fmaida/pico8-mkdocs-plugin
    pypi_id: pico8-mkdocs-plugin
    labels: [plugin]
    category: other
- name: same-dir
    mkdocs_plugin: same-dir
    github_id: oprypin/mkdocs-same-dir
    pypi_id: mkdocs-same-dir
    labels: [plugin]
    category: other
- name: thumbnails
    mkdocs_plugin: thumbnails
    github_id: normanlorrain/mkdocs-thumbnails
    pypi_id: mkdocs-thumbnails
    labels: [plugin]
    category: other
- name: vim-md-tags
    mkdocs_plugin: vim-md-tags
    github_id: midnightprioriem/mkdocs-vim-md-tags-plugin
    pypi_id: mkdocs-vim-md-tags-plugin
    labels: [plugin]
    category: other
- name: badges
    mkdocs_plugin: badges
    github_id: six-two/mkdocs-badges
    pypi_id: mkdocs-badges
    labels: [plugin]
    category: other
- name: placeholder
    mkdocs_plugin: placeholder
    github_id: six-two/mkdocs-placeholder-plugin
    pypi_id: mkdocs-placeholder-plugin
    labels: [plugin]
    category: other
- name: no-sitemap
    mkdocs_plugin: no-sitemap
    github_id: leonardehrenfried/mkdocs-no-sitemap-plugin
    pypi_id: mkdocs-no-sitemap-plugin
    labels: [plugin]
    category: other
- name: techdocs-core
    mkdocs_plugin: techdocs-core
    github_id: backstage/mkdocs-techdocs-core
    pypi_id: mkdocs-techdocs-core
    labels: [plugin]
    category: other
- name: Family tree example
    github_id: unverbuggt/mkdocs-familytree-example
    labels: []
    category: other
    `
}
