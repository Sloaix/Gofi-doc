import './introduction.less'

# 介绍

- Gofi是一个由Ant Design Vue Pro构建，Golang强力驱动的Web网盘应用程序。
- 前端基于 [Ant Design Vue Pro](https://github.com/sendya/ant-design-pro-vue) 构建， 后端使用Golang服务端框架[iris](https://github.com/kataras/iris)驱动

import ImgWidthBase from '@components/ImgWidthBase'

<div className="pic-plus">
  <ImgWidthBase url="antd-icon.svg" width={120} />
   <span>+</span>
  <ImgWidthBase url="iris-icon.svg" height={120}/> 
</div>

## 特点

- Gofi应用程序由一个可执行的二进制文件组成，所有静态资源都内嵌在里面，使用Sqlite3数据库，十分容易部署。
- Gofi是Golang应用程序，天生具备Golang跨平台的特性，目前编译的二进制程序可以在MacOs/Windows/Linux/Android上运行
- Gofi具有现代化的用户界面，支持全球化。(默认支持中英文)

## 技术栈

- [Ant Design Vue Pro](https://github.com/sendya/ant-design-pro-vue)
- [iris](https://github.com/kataras/iris)

## 支持环境

- 现代浏览器
- MacOS / Windows / Linux / Android

## 版本

- Gofi 版本：[Github Release 页面](https://github.com/Sloaix/Gofi/releases)
