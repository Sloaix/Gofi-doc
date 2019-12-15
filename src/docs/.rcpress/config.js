const path = require('path');
module.exports = {
  base: process.env.base || '',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Gofi',
      description: '一个由Ant Design Vue Pro构建，Golang强力驱动的Web网盘应用程序'
    },
    '/en-US': {
      lang: 'en-US',
      title: 'Gofi',
      description: 'A web disk application whose UI is built with Ant Design Pro and it is driven by Golang'
    }
  },
  logo: '/favicon.png',
  head: [
    ['link', { rel: 'icon', href: `/favicon.png` }]
  ],
  serviceWorker: true,
  footer:
    'Powered by <a target="_blank" href="https://github.com/YvesCoding/rcpress">RcPress</a> | MIT Licensed | Copyright © 2019-present <a target="_blank" href="https://github.com/Sloaix">Sloaix</a>',
  themeConfig: {
    repo: 'Sloaix/Gofi', // 假定是 GitHub. 同时也可以是一个完整的 Gitee URL,默认为Gihub仓库，支持Github,Bitbucket,Gitee。
    docsRepo: 'Sloaix/Gofi-doc', // 自定义文档仓库，默认和docsRepo的值一致
    docsRelativeDir: 'src/docs', // 项目根目录到文档的相对地址，默认为''
    docsDir: 'src/docs', // 文档目录 默认为docs
    docsBranch: 'master', // 文档所在git分支
    editLinks: true, // 默认是 false, 设置为 true 来启用
    editLinkText: '帮助我们改善此页面！', // 默认为 "Edit this page"
    showAvatarList: true // 是否显示编辑过此页面的用户用户列表, 设置为false关闭
    ,
    locales: {
      '/': {
        label: '简体中文',
        selectText: '语言(Lang)',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新于', // string | false
        nav: [
          {
            text: '指南',
            link: '/guide/'
          },
          {
            text: '预览站点',
            link: 'http://gofi.sloaix.com'
          },
          {
            text: '完善文档',
            link: 'https://github.com/Sloaix/Gofi-doc'
          },
          {
            text: 'GitHub',
            link: 'https://github.com/Sloaix/Gofi',
            important: true
          }
        ],
        sidebar: {
          '/guide/': getGuideSidebar('开始上手')
        }
      },
      '/en-US': {
        label: 'English',
        selectText: 'Language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last updated on', // string | false
        nav: [
          {
            text: 'Guide',
            link: '/en-US/guide/'
          },
          {
            text: 'Preview Site',
            link: 'http://gofi.sloaix.com'
          },
          {
            text: 'Improve Document',
            link: 'https://github.com/Sloaix/Gofi-doc'
          },
          {
            text: 'GitHub',
            link: 'https://github.com/Sloaix/Gofi',
            important: true
          }
        ],
        sidebar: {
          '/en-US/guide/': getGuideSidebar('Get Started')
        }
      },
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './components')
      }
    }
  }
};

function getGuideSidebar(start) {
  return [
    {
      title: start,
      collapsable: false,
      children: ['', 'getting-started']
    },
    'run-on-android'
  ];
}
