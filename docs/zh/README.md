---
home: true
heroImage: /images/logo.svg
heroText: Gofi
tagline: Gofi是一款用于构建个人云盘的应用
actions:
  - text: 关注Gofi 
    link: https://github.com/Sloaix/Gofi 
    type: primary
features:
  - title: 易部署
    details: 使用Sqlite3数据库存储,所有静态资源内嵌进单二进制可执行文件内
  - title: 跨平台
    details: 依托于Go,除Mac/Linux/Windows外，你甚至可以在Android手机上运行Gofi
  - title: 现代化
    details: 基于React+TailwindCss构建的现代化界面,以及多语言支持
footer: Copyright © 2021-present gofi.calmlyfish.com
---

# 快速上手

## 下载发布包

你可以在[Gofi Release](https://yarnpkg.com)页面，找到最新版本的 Gofi 应用程序,请选择对应的平台下载

```bash
# 下载MacOS平台版本,并重命名为gofi
wget -O gofi https://github.com/Sloaix/Gofi/releases/latest/download/gofi-darwin-10.12-amd64

# 需要可执行权限
chmod +x gofi
```

## 启动 Gofi

gofi 的默认端口号是 8080,您可以使用`-p`选项进行更改

```bash
# 直接运行
./gofi

# 后台运行
nohup ./gofi &

# 指定端口号(可能需要sudo权限)
./gofi -p 80

# 指定spa应用api的服务器ip地址(如果是在公网环境需要指定，局域网会自动获取)
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
        
# ip参数指的是后端api的ip，如果设置不正确，前端将无法获得数据。

```
