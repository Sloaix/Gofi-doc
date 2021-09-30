---
home: true
heroImage: /images/logo.svg
heroText: Gofi
tagline: Gofi is an application for building personal cloud drives
actions:
  - text: Star Gofi
    link: https://github.com/Sloaix/Gofi
    type: primary
features:
  - title: Easy to deploy
    details: Use Sqlite3 database storage, all static resources embedded in a single binary executable
  - title: Cross Platform
    details: Relying on Go, you can even run Gofi on your Android phone in addition to Mac/Linux/Windows.
  - title: Modernization
    details: Modern interface built on React+TailwindCss, and multi-language support
footer: Copyright © 2021-present gofi.calmlyfish.com
---

# Getting Start

## Download

you can find latest Gofi application on [Gofi Release](https://yarnpkg.com) page,please choose right platform matched your os.

```bash
# download latest MacOS plaftform gofi, rename it.
wget -O gofi https://github.com/Sloaix/Gofi/releases/latest/download/gofi-darwin-10.12-amd64

# need executable permission
chmod +x gofi
```

## Run

default port of gofi is 8080, which can specified by using `-p` option.

```bash
# run (default is 8080)
./gofi

# run as daemon
nohup ./gofi &

# 80 port (need sudo permission)
./gofi -p 80

# docker
docker run -d \
        --name=gofi \
        -p 80:8080 \
        -v /path/to/app:/app \
        -v /path/to/storage:/app/storage \
        --restart unless-stopped \
        sloaix/gofi:latest
```
