# 部署到Android设备

在 Android 的 /data/local/tmp 目录下，adb 用户具有可执行权限。使用 nohup ./gofi &命令可以启动一个后台运行的 gofi 程序。

## 下载发布包

你可以在[Gofi Release](https://yarnpkg.com)页面，找到最新版本的Gofi应用程序

```bash
# 下载Android版本的Gofi
wget -O gofi https://github.com/Sloaix/Gofi/releases/latest/download/gofi-android-16-arm
```

## 推送Gofi到设备

```bash
adb push ./gofi /data/local/tmp/gofi
```

## 更改权限

```bash
# 进入shell模式
adb shell
cd /data/local/tmp
chmod 755 ./gofi
```

## 启动Gofi

```bash
# 启动Gofi,监听12345端口
./gofi -p 12345

# 后台启动Gofi,监听12345端口
nohup ./gofi -p12345 &
```