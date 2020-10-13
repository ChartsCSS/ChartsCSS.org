const { description } = require('../../package')

/**
 * Theme configuration reference.
 * https://v1.vuepress.vuejs.org/config/
 * https://v1.vuepress.vuejs.org/theme/
 * https://v1.vuepress.vuejs.org/plugin/
 */
module.exports = {

  title: 'Charts.css',

  description: description,

  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/charts.css/dist/charts.min.css' }],
    ['meta', { name: 'theme-color', content: '#f57' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: 'https://github.com/ChartsCSS/ChartsCSS.org',
    docsBranch: 'main',
    docsDir: 'src',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: false,
    logo: '/assets/img/logo.svg',
    displayAllHeaders: true,
    search: false,
    nav: [
      {
        text: 'Get Started',
        link: '/docs/',
      },
      {
        text: 'Components',
        link: '/components/'
      },
      {
        text: 'Charts',
        link: '/charts/'
      },
      {
        text: 'Examples',
        link: '/examples/'
      },
      {
        text: 'GitHub repo',
        link: 'https://github.com/ChartsCSS/charts.css'
      }
    ],
    sidebar: [
      {
        title: 'Get Started',
        path: '/docs/',
        collapsable: false,
        sidebarDepth: -1,
        children: [
          '/docs/installation',
          '/docs/usage',
          '/docs/concepts',
        ]
      },
      {
        title: 'Components',
        path: '/components/',
        collapsable: false,
        sidebarDepth: -1,
        children: [
          '/components/title',
          '/components/legend',
          '/components/wrapper',
          '/components/axes',
          '/components/tooltips',
          '/components/motion-effects',
          '/components/animations',
        ]
      },
      {
        title: 'Charts',
        path: '/charts/',
        collapsable: false,
        sidebarDepth: -1,
        children: [
          '/charts/bar',
          '/charts/column',
          '/charts/line',
          '/charts/bubble',
          '/charts/pie',
          '/charts/donut',
          '/charts/polar',
          '/charts/radar',
        ]
      },
      {
        title: 'Development',
        path: '/development/',
        collapsable: false,
        sidebarDepth: -1,
        children: [
          '/development/design-principles',
          '/development/roadmap',
        ]
      }
    ],
  },

  markdown: {
    lineNumbers: true
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
