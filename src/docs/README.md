---
actionText: 快速开始 →
actionLink: /guide/
showStar: true
home: true
features:
  - title: 易部署
    details: 使用Sqlite3数据库存储,所有静态资源内嵌进单二进制可执行文件内
  - title: 跨平台
    details: 依托于Go,除Mac/Linux/Windows外，你甚至可以在Android手机上运行Gofi
  - title: 现代化
    details: 基于Ant Design Vue Pro 的现代化界面以及多语言支持
---

::: warning-zh
Gofi目前还处于快速迭代期间,在公网上部署可能存在安全性问题,目前只建议局域网部署。
:::

# 快速上手

## 下载发布包

你可以在[Gofi Release](https://yarnpkg.com)页面，找到最新版本的 Gofi 应用程序,请选择对应的平台下载

```bash
# 下载MacOS平台版本,并重命名为gofi
wget -O gofi https://github.com/Sloaix/Gofi/releases/latest/download/gofi-darwin-10.6-amd64
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
./gofi -p 80 -ip 114.114.114.114

```

