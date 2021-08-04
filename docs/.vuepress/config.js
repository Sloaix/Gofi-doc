const plugins = ["vuepress-plugin-locale-redirect"];

SITE_LOCALE = {
  // 键名是该语言所属的子路径
  // 作为特例,默认语言可以使用 '/' 作为其路径。
  "/": {
    lang: "en",
    description: "Gofi is an application for building personal cloud drives",
  },
  "/zh/": {
    lang: "zh",
    description: "Gofi是一款用于构建个人云盘的应用",
  },
};

const THEME_LOCALE = {
  // 键名是该语言所属的子路径
  // 作为特例,默认语言可以使用 '/' 作为其路径。
  "/": {
    selectLanguageText: "English",
    selectLanguageName: "English",
    notFound: ["NotFound"],
    backToHome: "Back To Home",
    lastUpdatedText: "Last Updated",
    navbar: [
      {
        text: "Start",
        link: "/help.md",
      },
      {
        text: "Changelog",
        link: "/release-note.md",
      },
    ],
  },
  "/zh/": {
    selectLanguageText: "简体中文",
    selectLanguageName: "简体中文",
    notFound: ["找不到该页面"],
    backToHome: "返回首页",
    lastUpdatedText: "上次更新",
    navbar: [
      {
        text: "开始使用",
        link: "/zh/help.md",
      },
      {
        text: "版本日志",
        link: "/zh/release-note.md",
      },
    ],
  },
};

module.exports = {
  lang: "zh",
  title: "Gofi",
  head: [["link", { rel: "icon", href: "/images/logo.svg" }]],
  locales: SITE_LOCALE,
  themeConfig: {
    sidebar: "auto",
    logo: "/images/logo.svg",
    contributors: false,
    locales: THEME_LOCALE,
  },
  plugins: plugins,
};
