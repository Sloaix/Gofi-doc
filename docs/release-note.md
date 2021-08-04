# Release Note

See this page for ouputs.[Github Release](https://github.com/Sloaix/Gofi/releases)

## v1.0.0

Using React/Typescript/Tailwind CSS refactoring, the previous version can be upgraded directly.

### broken changes

- Android is no longer supported (if you really need to run on Android, please compile from the source code yourself)
- Removed personalization, now you can no longer make changes to themes and Gofi layouts

## v0.5.4

fix some bugs, support to preview image,video,audio,text file

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

- feat: display file icon according to the file extesion
- feat: show last modified column for list

## v0.5.2

- improve GetLanIP method.[#5](https://github.com/Sloaix/Gofi/issues/5)
- the size of the gofi was optimized using the upx
