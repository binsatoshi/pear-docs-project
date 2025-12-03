import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pear Runtime",
  description: "Build anything peer-to-peer. Create local-first applications that scale infinitely without servers.",
  
  // Important: Base path must match your GitHub repository name
  base: '/pear-docs-project/',
  
  // Ignore dead links during build (helpful for placeholder pages)
  ignoreDeadLinks: true,
  
  head: [
    ['link', { rel: 'icon', href: '/pear-docs-project/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Pear Runtime Documentation' }],
    ['meta', { name: 'og:description', content: 'Build anything peer-to-peer. Create local-first applications that scale infinitely without servers.' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    logo: '/logo.svg',
    
    siteTitle: 'Pear Runtime',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Learn', link: '/learn/concepts/' },
      { text: 'Build', link: '/build/quickstart/' },
      { text: 'Reference', link: '/reference/api/' },
      { text: 'Resources', link: '/resources/examples/' },
    ],

    sidebar: {
      '/learn/': [
        {
          text: 'Learn',
          items: [
            {
              text: 'Core Concepts',
              link: '/learn/concepts/',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/learn/concepts/' },
              ]
            },
            {
              text: 'Data Structures',
              link: '/learn/data-structures/',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/learn/data-structures/' },
              ]
            },
          ]
        }
      ],
      
      '/build/': [
        {
          text: 'Build',
          items: [
            {
              text: 'Quickstart',
              link: '/build/quickstart/',
            },
            {
              text: 'Tutorials',
              collapsed: false,
              items: [
                { text: 'Build Your First P2P App', link: '/build/tutorials/first-app' },
              ]
            },
          ]
        }
      ],
      
      '/reference/': [
        {
          text: 'Reference',
          items: [
            {
              text: 'API',
              link: '/reference/api/',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/reference/api/' },
              ]
            },
          ]
        }
      ],
      
      '/resources/': [
        {
          text: 'Resources',
          items: [
            {
              text: 'Examples',
              link: '/resources/examples/',
            },
            {
              text: 'Troubleshooting',
              link: '/resources/troubleshooting/',
            },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/holepunchto/pear' },
      { icon: 'discord', link: 'https://discord.gg/ga5FTcdADF' },
      { icon: 'twitter', link: 'https://twitter.com/holepunchto' },
    ],
    
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },
    
    editLink: {
      pattern: 'https://github.com/binsatoshi/pear-docs-project/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    
    footer: {
      message: 'Released under the Apache-2.0 License.',
      copyright: 'Copyright © 2024 Holepunch'
    },

    // Last updated timestamp
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    // Outline/Table of contents settings
    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    // Dark mode toggle
    appearance: 'dark',

    // Documentation footer navigation
    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },

    // Return to top button
    returnToTopLabel: 'Return to top',
    
    // Mobile menu label
    sidebarMenuLabel: 'Menu',
    
    // Dark mode toggle label
    darkModeSwitchLabel: 'Appearance',
  },

  // Markdown configuration
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true,
    config: (md) => {
      // Add custom markdown-it plugins if needed
    }
  },

  // Build optimization
  vite: {
    build: {
      chunkSizeWarningLimit: 1000
    }
  }
})
