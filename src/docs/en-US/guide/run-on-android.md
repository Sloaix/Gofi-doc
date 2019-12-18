# Run on android

## 1. Deploy on Termux(Recommend)

### Install Termux
You can install termux by GooglePlay,or compile [Termux App Open Source Porject](https://github.com/termux/termux-app) by yourself.

### Download
you can find latest Gofi application on [Gofi Release](https://yarnpkg.com) page.make sure wget tool is intalled.

open Termux app, and input below commands.
```bash
# install wget
pkg install wget

# Download Gofi for android paltform.
wget -O gofi https://github.com/Sloaix/Gofi/releases/latest/download/gofi-android-16-arm
```

### Change permission

```bash
# use termux shell
chmod 755 ./gofi
```

### Start

```bash
# start Gofi process,listen 12345 port
./gofi -p 12345

# start Gofi daemon process,listen 12345 port
nohup ./gofi -p 12345 &
```

---

## 2. Deploy by ADB

make sure you has connected to android device by adb. Use ```adb devices``` command to check.

### Download

you can find latest Gofi application on [Gofi Release](https://yarnpkg.com) page

```bash
# Download Gofi for android paltform.
wget -O gofi https://github.com/Sloaix/Gofi/releases/latest/download/gofi-android-16-arm
```

### Push to device

```bash
adb push ./gofi /data/local/tmp/gofi
```

### Change permission

```bash
adb shell
cd /data/local/tmp
chmod 755 ./gofi
```

### Start

```bash
# start Gofi process,listen 12345 port
./gofi -p 12345

# start Gofi daemon process,listen 12345 port
nohup ./gofi -p 12345 &
```
