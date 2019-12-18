# 部署到Android设备

## 1. 通过Termux部署(推荐此方法,无需ADB)
### 安装Termux
你可以通过GoolePlay自行安装Termux,或者通过[Github](https://github.com/termux/termux-app)的Termux开源项目手动编译。

### 下载
你可以在[Gofi Release](https://yarnpkg.com)页面，找到最新版本的Gofi应用程序。

打开Termux应用程序，输入以下命令。
```bash
# 安装wget
pkg install wget

# 下载Android版本的Gofi
wget -O gofi https://github.com/Sloaix/Gofi/releases/latest/download/gofi-android-16-arm
```

### 更改权限

```bash
# 使用 termux 的命令行窗口键入以下命令
chmod 755 ./gofi
```

### 启动Gofi

使用 termux 的命令行窗口键入以下命令

```bash
# 启动Gofi,监听12345端口
./gofi -p 12345

# 后台启动Gofi,监听12345端口
nohup ./gofi -p 12345 &

```
---

## 2. 通过ADB部署

在 Android 的 /data/local/tmp 目录下，adb 用户具有可执行权限。使用 nohup ./gofi &命令可以启动一个后台运行的 gofi 程序。

### 下载发布包

你可以在[Gofi Release](https://yarnpkg.com)页面，找到最新版本的Gofi应用程序

```bash
# 下载Android版本的Gofi
wget -O gofi https://github.com/Sloaix/Gofi/releases/latest/download/gofi-android-16-arm
```

### 推送Gofi到设备

```bash
adb push ./gofi /data/local/tmp/gofi
```

### 更改权限

```bash
# 进入shell模式
adb shell
cd /data/local/tmp
chmod 755 ./gofi
```

### 启动Gofi

```bash
# 启动Gofi,监听12345端口
./gofi -p 12345

# 后台启动Gofi,监听12345端口
nohup ./gofi -p 12345 &
```