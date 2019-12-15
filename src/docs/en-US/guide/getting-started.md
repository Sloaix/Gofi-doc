# Getting Start

## Download

you can find latest Gofi application on [Gofi Release](https://yarnpkg.com) page,please choose right platform matched your os.

```bash
# download v0.5.1 MacOS plaftform gofi, rename it.
wget -O gofi https://github.com/Sloaix/Gofi/releases/download/v0.5.1/gofi-v0.5.1-darwin-10.6-amd64
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