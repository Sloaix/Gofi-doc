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

```