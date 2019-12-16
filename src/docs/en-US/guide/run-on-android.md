# Run on android
use ```nohup ./gofi &``` command to start a gofi process at /data/local/tmp directory.

## Download

ou can find latest Gofi application on [Gofi Release](https://yarnpkg.com) page

```bash
# 下载Android版本的Gofi
wget -O gofi https://github.com/Sloaix/Gofi/releases/latest/download/gofi-android-16-arm
```

## Push to device

```bash
adb push ./gofi /data/local/tmp/gofi
```

## Change permission

```bash
adb shell
cd /data/local/tmp
chmod 755 ./gofi
```

## Start

```bash
# start Gofi process,listen 12345 port
./gofi -p 12345

# start Gofi daemon process,listen 12345 port
nohup ./gofi -p12345 &
```