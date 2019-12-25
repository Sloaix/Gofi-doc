# 发版公告

具体编译产物请查看[Github Release](https://github.com/Sloaix/Gofi/releases)

## v0.5.4
修复一些BUG，新增图片、文本、音频、视频预览功能。

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
>
从所有ip地址中中去拿属于
"192.168.0.0/16",
"172.16.0.0/12",
"10.0.0.0/8"
这几个网段的ip作为前端请求的ip,如果本机的ip不属于以上任意网段，默认使用127.0.0.1作为ip地址。
- 使用upx优化了编译包的大小