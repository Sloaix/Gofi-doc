---
actionText: Start →
actionLink: /en-US/guide/
showStar: true
home: true
features:
  - title: Easy Deploy
    details: Use sqlite3 as database,all static forntend assets are embedded in executateable binary file.
  - title: Cross Platform
    details: Based on Go,you can run Gofi on Android, except Mac/Linux/Windows
  - title: Modern
    details: Modern User Interface based on Ant Design Vue Pro,and support i18n
---

::: warning
Gofi is still in a rapid iteration, and there may be security issues when deploying on the public network. At present, only local area network deployment is recommended.
:::

# Getting Start

## Download

you can find latest Gofi application on [Gofi Release](https://yarnpkg.com) page,please choose right platform matched your os.

```bash
# download MacOS plaftform gofi, rename it.
wget -O gofi https://github.com/Sloaix/Gofi/releases/latest/download/gofi-darwin-10.6-amd64
```

## Run

default port of gofi is 8080, which can specified by using `-p` option.

```bash
# run
./gofi

# run as daemon process
nohup ./gofi &

# 80 port (need sudo permission)
./gofi -p 80

# server ip specified
./gofi -p 80 -ip 251.251.251.251

```