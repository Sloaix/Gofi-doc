# 快速上手

## 下载发布包

你可以在[Gofi Release](https://yarnpkg.com)页面，找到最新版本的Gofi应用程序,请选择对应的平台下载

```bash
# 下载latest MacOS平台版本,并重命名为gofi
wget -O gofi https://github.com/Sloaix/Gofi/releases/latest/download/gofi-darwin-10.12-amd64

# 需要可执行权限
chmod +x gofi
```

## 启动Gofi

gofi的默认端口号是8080,您可以使用```-p```选项进行更改

```bash
# 直接运行
./gofi

# 指定端口号(可能需要sudo权限)
./gofi -p 80

# 指定spa应用api的服务器ip地址(如果是在公网环境需要指定，局域网会自动获取)
./gofi -p 80 -ip 251.251.251.251

```