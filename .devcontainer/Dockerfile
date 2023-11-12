FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye
ARG PWSH_URL=https://github.com/PowerShell/PowerShell/releases/download/v7.3.9/powershell_7.3.9-1.deb_amd64.deb
RUN apt-get update && apt-get install -y wget python3-pip; \
    wget ${PWSH_URL}; \
    dpkg -i powershell_7.3.9-1.deb_amd64.deb; \
    apt-get install -f; \
    rm powershell_7.3.9-1.deb_amd64.deb; \
    pip install --upgrade pip; \
    pip install mkdocs mkdocs-material
