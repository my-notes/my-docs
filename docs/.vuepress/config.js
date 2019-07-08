module.exports = {
    base:'/trhtdocs/',
    title: '平台文档',
    description: 'Just playing around',
    head: [
      ['link', { rel: 'icon', href: `/logo.jpg` }]
    ],
    themeConfig: {
      // 你的GitHub仓库，请正确填写
      repo: 'https://github.com/chillywg/trhtdocs/',
      
      // 如果你的文档不在仓库的根部
      docsDir: 'docs',
      // 可选，默认为 master
      docsBranch: 'master',
      // 默认为 true，设置为 false 来禁用
      editLinks: true,
      editLinkText: '编辑此页面',
      // 自定义仓库链接文字。
      repoLabel: 'GitHub',
      nav: [
        { text: '首页', link: '/' },
        
        { text: '百度', link: 'https://www.baidu.com' },
        {
          text: 'Languages',
          items: [
            { text: 'Chinese', link: '/language/chinese' },
            { text: 'English', link: '/language/english' }
          ]
        }
      ],
      sidebar: [
        ['/', '首页'],
        {
          title: 'MarkDown示例',
          collapsable: false, //是否展开
          children:[
            ['/blog/DemoBlog.md', 'MarkDown标题'],
            ['/blog/MarkDownSection.md', 'MarkDown段落'],
            ['/blog/MarkDownList.md', 'MarkDown列表'],
            ['/blog/MarkDowmBlock.md', 'MarkDown区块'],
            ['/blog/MarkDownCode.md', 'MarkDown代码'],
            ['/blog/MarkDownLink.md', 'MarkDown链接'],
            ['/blog/MarkDownImg.md', 'MarkDown图片'],
            
            
          ],
        },
        
        {
          title: '组件',
          collapsable: false,
          children:[['/blog/DemoChild.md', '示例']]
        },
        
      ],
      sidebarDepth: 2
    }
  }