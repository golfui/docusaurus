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
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  resourcesSidebar: [
    {
      type: 'category',
      label: 'AI Tools',
      link: {
        type: 'doc',
        id: 'AI/README',
      },
      items: [
        'AI/chatGPT',
        'AI/README',
      ],
    },
    {
      type: 'category',
      label: 'Web3',
      items: [
        'web3/spa-advantages',
        'web3/spa-advantages-ru',
        'web3/spa-2',
      ],
    },
    {
      type: 'category',
      label: 'CSS',
      link: {
        type: 'doc',
        id: 'CSS/README',
      },
      items: [
        'CSS/README',
      ],
    },
    {
      type: 'category',
      label: 'Programming',
      items: [
        '编程/JSON',
        '编程/代码美化',
        '编程/接口对接',
        '编程/文档',
        '编程/正则',
        '编程/速查表',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        '资源/Icon',
        '资源/image process',
        {
          type: 'category',
          label: 'Temporary Accounts',
          items: [
            '资源/临时账户/邮箱',
          ],
        },
        '资源/免费插图',
        '资源/壁纸',
        '资源/工具',
        '资源/文件分享',
        '资源/颜色',
      ],
    },
    {
      type: 'category',
      label: 'Cron',
      items: [
        'cron/gui',
      ],
    },
  ],
};

module.exports = sidebars;