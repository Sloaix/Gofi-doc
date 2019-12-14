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

# Getting Start

## Download

you can find latest Gofi application on [Gofi Release](https://yarnpkg.com) page,please choose right platform matched your os.

```bash
# download v0.5.0 MacOS plaftform gofi, rename it.
wget -O gofi https://github.com/Sloaix/Gofi/releases/download/v0.5.0/gofi-v0.5.0-darwin-10.6-amd64
```

## Run

default port of gofi is 8080, which can specified by using `-p` option.

```bash
# run
./gofi

# 80 port (need sudo permission)
./gofi -p 80

# server ip specified
./gofi -p 80 -ip 114.114.114.114

```
