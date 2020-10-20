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
    ['link', { rel: 'icon', href: '/assets/img/logo.svg' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'mask-icon', href: '/assets/img/logo.svg', color: '#f57' }],
    ['link', { rel: 'apple-touch-icon', href: '/assets/img/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#f57' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileImage', content: '/assets/img/logo.svg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
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
        text: 'Customization',
        link: '/customization/'
      },
      {
        text: 'Development',
        link: '/development/'
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
        ]
      },
      {
        title: 'Components',
        path: '/components/',
        collapsable: false,
        sidebarDepth: -1,
        children: [
          '/components/wrapper',
          '/components/data',
          '/components/datasets',
          '/components/labels',
          '/components/axes',
          '/components/spacing',
          '/components/reverse-order',
          '/components/colors',
          '/components/stacked',
          '/components/tooltips',
          '/components/title',
          '/components/legend',
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
        title: 'Customization',
        path: '/customization/',
        collapsable: false,
        sidebarDepth: -1,
        children: [
          '/customization/3d-effects',
          '/customization/motion-effects',
          '/customization/animations',
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
      },
      {
        title: 'Examples',
        path: '/examples/',
        collapsable: false,
        sidebarDepth: -1,
        children: [
          '/examples/'
        ]
      }
    ]
  },

  markdown: {
    lineNumbers: true,
    toc: true
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "New content is available.",
          buttonText: "Refresh"
        }
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-180916201-1'
      }
    ]
  ]
}
