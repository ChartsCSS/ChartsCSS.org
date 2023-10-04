/**
 * Theme configuration reference.
 * https://v1.vuepress.vuejs.org/config/
 * https://v1.vuepress.vuejs.org/theme/
 * https://v1.vuepress.vuejs.org/plugin/
 */
module.exports = {

  title: 'Charts.css',

  description: 'CSS data visualization framework',

  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/charts.css@1.0.1/dist/charts.min.css' }],
    ['link', { rel: 'icon', href: '/assets/img/logo.svg' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'mask-icon', href: '/assets/img/logo.svg', color: '#f57' }],
    ['link', { rel: 'apple-touch-icon', href: '/assets/img/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#f57' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileImage', content: '/assets/img/logo.svg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    // Google Fonts
    [ "link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [ "link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" } ],
    [ "link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;500;700&display=swap" } ]
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
          '/docs/anatomy',
          '/docs/migrate-to-v1',
        ]
      },
      {
        title: 'Components',
        path: '/components/',
        collapsable: false,
        sidebarDepth: -1,
        children: [
          '/components/wrapper',
          '/components/heading',
          '/components/data',
          '/components/datasets',
          '/components/labels',
          '/components/axes',
          '/components/spacing',
          '/components/orientation',
          '/components/colors',
          '/components/stacked',
          '/components/tooltips',
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
          '/charts/area',
          '/charts/line',
          '/charts/pie',
          '/charts/radial',
          '/charts/polar',
          '/charts/radar',
          '/charts/mixed',
        ]
      },
      {
        title: 'Customization',
        path: '/customization/',
        collapsable: false,
        sidebarDepth: -1,
        children: [
          '/customization/basic-styling',
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
          '/development/supported-features',
          '/development/cheat-sheet',
          '/development/roadmap',
        ]
      },
      {
        title: 'Examples',
        path: '/examples/',
        collapsable: false,
        sidebarDepth: -1,
        children: [
          '/examples/chart-builder'
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
    ],
    [
      'vuepress-plugin-seo',
      {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        image: () => 'https://chartscss.org/assets/img/logo.png',
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
      }
    ]
  ]
}
