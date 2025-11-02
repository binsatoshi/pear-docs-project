import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pear Documentation",
  description: "Build unstoppable P2P applications with JavaScript",
  
  // IMPORTANT: Set the base URL for GitHub Pages
  // If deploying to https://username.github.io/repo-name/
  // Set base to '/repo-name/'
  // If deploying to custom domain or https://username.github.io/, use '/'
  base: '/pear-docs-project/',
  
  // Ignore dead links for prototype/placeholder pages
  ignoreDeadLinks: true,
  
  // Theme configuration
  themeConfig: {
    // Logo
    logo: '/logo.svg',
    
    // Site title
    siteTitle: 'Pear Docs',
    
    // Navigation bar
    nav: [
      { 
        text: 'Learn', 
        items: [
          { text: 'Core Concepts', link: '/learn/concepts/' },
          { text: 'Data Structures', link: '/learn/data-structures/' },
          { text: 'Networking', link: '/learn/networking/' }
        ]
      },
      { 
        text: 'Build',
        items: [
          { text: 'Quick Start', link: '/build/quickstart/' },
          { text: 'Tutorials', link: '/build/tutorials/first-app' },
          { text: 'Guides', link: '/build/guides/' }
        ]
      },
      { 
        text: 'Reference',
        items: [
          { text: 'API', link: '/reference/api/' },
          { text: 'CLI', link: '/reference/cli/' },
          { text: 'Configuration', link: '/reference/configuration/' }
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Examples', link: '/resources/examples/' },
          { text: 'Troubleshooting', link: '/resources/troubleshooting/' },
          { text: 'FAQ', link: '/resources/faq/' }
        ]
      }
    ],

    // Sidebar configuration
    sidebar: {
      '/learn/': [
        {
          text: 'Core Concepts',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/learn/concepts/' },
            { text: 'What is P2P?', link: '/learn/concepts/what-is-p2p' },
            { text: 'How Pear Works', link: '/learn/concepts/how-pear-works' },
            { text: 'When to Use Pear', link: '/learn/concepts/when-to-use-pear' },
            { text: 'Security', link: '/learn/concepts/security' }
          ]
        },
        {
          text: 'Data Structures',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/learn/data-structures/' },
            { text: 'Distributed Logs', link: '/learn/data-structures/distributed-logs' },
            { text: 'Databases', link: '/learn/data-structures/databases' },
            { text: 'File Systems', link: '/learn/data-structures/file-systems' },
            { text: 'Multi-Writer', link: '/learn/data-structures/multi-writer' }
          ]
        },
        {
          text: 'Networking',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/learn/networking/' },
            { text: 'Peer Discovery', link: '/learn/networking/peer-discovery' },
            { text: 'Direct Connections', link: '/learn/networking/direct-connections' },
            { text: 'Advanced Patterns', link: '/learn/networking/advanced-patterns' }
          ]
        }
      ],
      
      '/build/': [
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Quick Start', link: '/build/quickstart/' }
          ]
        },
        {
          text: 'Tutorials',
          collapsed: false,
          items: [
            { text: 'Your First App', link: '/build/tutorials/first-app' },
            { text: 'Chat with Persistence', link: '/build/tutorials/chat-with-persistence' },
            { text: 'File Sharing App', link: '/build/tutorials/file-sharing-app' },
            { text: 'Collaborative Editor', link: '/build/tutorials/collaborative-editor' },
            { text: 'P2P Game', link: '/build/tutorials/p2p-game' }
          ]
        },
        {
          text: 'Platform Guides',
          collapsed: true,
          items: [
            { text: 'Desktop Apps', link: '/build/guides/desktop-apps' },
            { text: 'Terminal Apps', link: '/build/guides/terminal-apps' },
            { text: 'Mobile Apps', link: '/build/guides/mobile-apps' }
          ]
        },
        {
          text: 'Framework Integration',
          collapsed: true,
          items: [
            { text: 'React', link: '/build/guides/react-integration' },
            { text: 'Vue', link: '/build/guides/vue-integration' },
            { text: 'Electron Migration', link: '/build/guides/electron-migration' }
          ]
        },
        {
          text: 'Advanced Topics',
          collapsed: true,
          items: [
            { text: 'Custom Replication', link: '/build/guides/custom-replication' },
            { text: 'Encryption', link: '/build/guides/encryption' },
            { text: 'Performance Tuning', link: '/build/guides/performance-tuning' },
            { text: 'Testing', link: '/build/guides/testing-p2p-apps' },
            { text: 'Debugging', link: '/build/guides/debugging' },
            { text: 'Releasing', link: '/build/guides/releasing' },
            { text: 'Best Practices', link: '/build/guides/best-practices' }
          ]
        }
      ],
      
      '/reference/': [
        {
          text: 'API Reference',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/reference/api/' },
            { text: 'Pear Runtime', link: '/reference/api/pear-runtime' },
            { text: 'Hypercore', link: '/reference/api/hypercore' },
            { text: 'Hyperbee', link: '/reference/api/hyperbee' },
            { text: 'Hyperdrive', link: '/reference/api/hyperdrive' },
            { text: 'Hyperswarm', link: '/reference/api/hyperswarm' },
            { text: 'HyperDHT', link: '/reference/api/hyperdht' },
            { text: 'Autobase', link: '/reference/api/autobase' },
            { text: 'Corestore', link: '/reference/api/corestore' },
            { text: 'Helpers', link: '/reference/api/helpers' }
          ]
        },
        {
          text: 'CLI Reference',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/reference/cli/' },
            { text: 'Commands', link: '/reference/cli/commands' },
            { text: 'Flags', link: '/reference/cli/flags' }
          ]
        },
        {
          text: 'Configuration',
          collapsed: false,
          items: [
            { text: 'package.json', link: '/reference/configuration/package-json' },
            { text: 'App Config', link: '/reference/configuration/app-config' },
            { text: 'Runtime Config', link: '/reference/configuration/runtime-config' }
          ]
        },
        {
          text: 'Bare Runtime',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/reference/bare/overview' },
            { text: 'API', link: '/reference/bare/api' },
            { text: 'Modules', link: '/reference/bare/modules' },
            { text: 'Node Compatibility', link: '/reference/bare/node-compatibility' }
          ]
        }
      ],
      
      '/resources/': [
        {
          text: 'Examples',
          collapsed: false,
          items: [
            { text: 'Gallery', link: '/resources/examples/' },
            { text: 'Chat App', link: '/resources/examples/chat-app' },
            { text: 'File Sharing', link: '/resources/examples/file-sharing' },
            { text: 'Collaborative DB', link: '/resources/examples/collaborative-db' },
            { text: 'Cross-Platform', link: '/resources/examples/cross-platform' },
            { text: 'IoT Network', link: '/resources/examples/iot-network' },
            { text: 'Game Server', link: '/resources/examples/game-server' }
          ]
        },
        {
          text: 'Troubleshooting',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/resources/troubleshooting/' },
            { text: 'Connection Issues', link: '/resources/troubleshooting/connection-issues' },
            { text: 'Installation', link: '/resources/troubleshooting/installation' },
            { text: 'Common Errors', link: '/resources/troubleshooting/common-errors' }
          ]
        },
        {
          text: 'Migration',
          collapsed: true,
          items: [
            { text: 'From v1', link: '/resources/migration/from-v1' },
            { text: 'From Node.js', link: '/resources/migration/from-nodejs' }
          ]
        },
        {
          text: 'Community',
          collapsed: true,
          items: [
            { text: 'FAQ', link: '/resources/faq/' },
            { text: 'Contributing', link: '/resources/community/contributing' },
            { text: 'Support', link: '/resources/community/support' },
            { text: 'Showcase', link: '/resources/community/showcase' }
          ]
        }
      ]
    },

    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/holepunchto' },
      { icon: 'discord', link: 'https://discord.gg/holepunch' },
      { icon: 'twitter', link: 'https://twitter.com/holepunchto' }
    ],

    // Footer
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Holepunch'
    },

    // Edit link
    editLink: {
      pattern: 'https://github.com/holepunchto/pear-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    // Last updated
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    // Search
    search: {
      provider: 'local',
      options: {
        placeholder: 'Search docs...',
        translations: {
          button: {
            buttonText: 'Search',
            buttonAriaLabel: 'Search'
          },
          modal: {
            displayDetails: 'Display detailed list',
            resetButtonTitle: 'Reset search',
            backButtonTitle: 'Close search',
            noResultsText: 'No results for',
            footer: {
              selectText: 'to select',
              selectKeyAriaLabel: 'enter',
              navigateText: 'to navigate',
              navigateUpKeyAriaLabel: 'up arrow',
              navigateDownKeyAriaLabel: 'down arrow',
              closeText: 'to close',
              closeKeyAriaLabel: 'escape'
            }
          }
        }
      }
    }
  },

  // Markdown configuration
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true,
    
    // Code groups
    codeTransformers: [],
    
    // Math support (optional)
    // math: true
  },

  // Head tags
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#667eea' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'Pear Documentation' }],
    ['meta', { name: 'og:image', content: '/og-image.png' }]
  ],

  // Site metadata
  lang: 'en-US',
  
  // Clean URLs (remove .html extension)
  cleanUrls: true,

  // Last updated timestamp
  lastUpdated: true,

  // Sitemap
  sitemap: {
    hostname: 'https://yourusername.github.io/pear-docs-project'
  }
})
