# 版本变更日志

具体编译产物请查看[Github Release](https://github.com/Sloaix/Gofi/releases)

## v1.0.0

使用 React/Typescript/TailwindCSS 重构,原版本可以无痛覆盖升级

### 破坏性变更

- 不再支持 Android(如确实需要在 Android 上运行,请自行从源码编译)
- 移除个性化,现在您无法再进行主题和 Gofi 布局的变更

### 新功能

- 新增 Docker 支持
- 新增 PDF/纯文本 的预览支持

## v0.5.4

修复一些 BUG，新增图片、文本、音频、视频预览功能。

- fix: remove CheckIp function in unit test
- fix: check path safety
- feat: support audio file preview.
- feat: add download button for preview page
- feat: allow preview assets in browser
- feat: add title for language switch icon.
- feat: image,video,text file preview
- fix: build problem, try to remove upx to fix it(#6)
- refactor: backend response build method
- refactor: file index navigation
- refactor: make language depends on http header Accept-Language
- feat: imporve preview mode for frontend ui

## v0.5.3

新增视频、音频、文本图标显示功能，最后修改时间显示功能

- feat: display file icon according to the file extesion
- feat: show last modified column for list

## v0.5.2

- 优化了 GetLanIP 方法.[#5](https://github.com/Sloaix/Gofi/issues/5)

  > 从所有 ip 地址中中去拿属于
  > "192.168.0.0/16",
  > "172.16.0.0/12",
  > "10.0.0.0/8"
  > 这几个网段的 ip 作为前端请求的 ip,如果本机的 ip 不属于以上任意网段，默认使用 127.0.0.1 作为 ip 地址。

- 使用 upx 优化了编译包的大小
