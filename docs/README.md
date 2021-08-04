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
# run
./gofi

# 80 port (need sudo permission)
./gofi -p 80

# server ip specified
./gofi -p 80 -ip 251.251.251.251

# docker
docker pull sloaix/gofi:latest
docker run -d \
        --name=gofi \
        -p 80:80 \
        -v /path/to/app:/app \
        -v /path/to/storage:/app/storage \
        --restart unless-stopped \
        sloaix/gofi:latest \
        -p=80 \
        -ip=api.gofi.domain

# ip parameter refers to the back-end api ip, if set incorrectly, the front-end will not be able to obtain data.  

```