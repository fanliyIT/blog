/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [
  //   {
  //     type: 'autogenerated',
  //     dirName: '.'
  //   },
  // ],
  docs: [
    "此处开始",
    "timeline",
    {
      type: "category",
      label: "前端",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "前端/ES6",
        "前端/TypeScript",
        {
          type: "category",
          label: "框架",
          link: {
            type: "generated-index",
          },
          items: [
            "前端/框架/学习什么",
            "前端/框架/Vue",
            "前端/框架/React",
          ]
        },
        // {
        //   type: "category",
        //   label: "编辑应用",
        //   link: {
        //     type: "generated-index",
        //   },
        //   collapsed: true,
        //   items: [
        //     "Markdown/编辑应用/列表",
        //     "Markdown/编辑应用/Typora 使用问题",
        //   ],
        // },
        // "Markdown/语法学习",
        // "Markdown/写作规范",
      ],
    },
    {
      type: "category",
      label: "Markdown",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "Markdown/为什么要使用 Markdown",
        {
          type: "category",
          label: "编辑应用",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "Markdown/编辑应用/列表",
            "Markdown/编辑应用/Typora 使用问题",
          ],
        },
        "Markdown/语法学习",
        "Markdown/写作规范",
      ],
    },
    {
      type: "category",
      label: "科学上网",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "科学上网/为什么要科学上网",
        "科学上网/能做什么",
        "科学上网/操作方法",
        "科学上网/移动端使用",
      ],
    },
    {
      type: "category",
      label: "浏览器",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "浏览器/使用什么浏览器",
        {
          type: "category",
          label: "插件",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "浏览器/插件/何为插件",
            "浏览器/插件/安装方法",
            "浏览器/插件/推荐列表",
            "浏览器/插件/Tampermonkey使用",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "常用 App",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "常用 App/通用",
        "常用 App/开发配件",
        "常用 App/开发环境",
        "常用 App/主工具",
      ],
    },
    {
      type: "category",
      label: "工具站点",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: ["工具站点/电子书", "工具站点/DIY 图片", "工具站点/图片资源"],
    },
    {
      type: "category",
      label: "Git 与 GitHub",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "Git 与 GitHub/什么是 Git",
        
      ],
    },
    {
      type: "category",
      label: "GitHub",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "GitHub/什么是 GitHub",
        "GitHub/访问问题",
        "GitHub/起步",
        "GitHub/插件",
        // "GitHub/访问问题",
      ],
    },
    {
      type: "category",
      label: "HTTP",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "HTTP/REST",
        "HTTP/GraphQL",
      ],
    },
    {
      type: "category",
      label: "SQL",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "SQL/连接应用",
        // "HTTP/GraphQL",
      ],
    },
    // {
    //   type: "category",
    //   label: "浏览器",
    //   link: {
    //     type: "generated-index",
    //   },
    //   collapsed: true,
    //   items: []
    // },
  ],
};
