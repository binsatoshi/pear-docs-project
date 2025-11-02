# Framework & Workflow Documentation

This document justifies the selection of VitePress as the documentation framework and outlines the recommended workflow for maintaining and updating the documentation.

---

## Framework Selection: VitePress

### Decision Summary

**Selected:** VitePress  
**Rationale:** Best balance of performance, developer experience, customizability, and community support for technical documentation.

---

## Framework Comparison

### Evaluated Options

| Framework | Pros | Cons | Score |
|-----------|------|------|-------|
| **VitePress** | ✅ Lightning fast build<br>✅ Vue-based, easy customization<br>✅ Excellent DX<br>✅ Built-in search<br>✅ Markdown-first | ⚠️ Vue ecosystem (vs React)<br>⚠️ Newer than Docusaurus | **9/10** |
| **Docusaurus** | ✅ React-based<br>✅ Large community<br>✅ Proven at scale<br>✅ Comprehensive plugins | ❌ Slower builds<br>❌ More opinionated<br>❌ Heavier bundle | **7/10** |
| **GitBook** (Current) | ✅ Easy to use<br>✅ Good UI | ❌ Closed source<br>❌ Limited customization<br>❌ No self-hosting<br>❌ Vendor lock-in | **4/10** |
| **Nextra** | ✅ Next.js based<br>✅ Modern architecture<br>✅ Clean design | ❌ Smaller community<br>❌ Less mature<br>❌ Limited plugins | **6/10** |
| **Docsify** | ✅ Simple<br>✅ Runtime rendering | ❌ No SSG<br>❌ Poor SEO<br>❌ Slower | **5/10** |

---

## Why VitePress?

### 1. **Performance**

**Build Speed:**
- **VitePress**: ~1-2 seconds for incremental builds
- **Docusaurus**: ~10-30 seconds for similar size

**Page Load:**
- **VitePress**: ~100ms initial load
- **Docusaurus**: ~300-500ms initial load

**Why it matters:** Fast feedback loop for developers contributing to docs. Better user experience for readers.

### 2. **Developer Experience**

```bash
# VitePress local development
npm run docs:dev
# Instant hot reload, ~50ms per change

# Built-in features
- Auto-generated sidebar
- Markdown extensions
- Vue components in markdown
- Code syntax highlighting
- Dark mode
- Search
```

**Comparison to GitBook:**
- GitBook: Requires GUI or limited markdown support
- VitePress: Full markdown flexibility, version controlled, collaborative

### 3. **Customization**

**What we can customize:**
- Theme colors and typography
- Layout components
- Navigation structure
- Interactive components
- Code playground integration
- Custom markdown containers

**Example: Custom Interactive Component**
```vue
<!-- docs/.vitepress/components/PeerConnection.vue -->
<template>
  <div class="peer-demo">
    <button @click="connect">Connect to Peer</button>
    <div v-if="connected">✅ Connected!</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Hyperswarm from 'hyperswarm'

const connected = ref(false)
async function connect() {
  // Real P2P connection demo
  const swarm = new Hyperswarm()
  // ...
  connected.value = true
}
</script>
```

Use in markdown:
```md
## Try It Now

<PeerConnection />
```

### 4. **Markdown Features**

VitePress supports:

**Standard:**
- GitHub Flavored Markdown
- Tables
- Code blocks with syntax highlighting
- Frontmatter

**Extended:**
- Custom containers (tip, warning, danger)
- Line highlighting in code blocks
- Code group tabs
- Emoji
- Table of contents
- Math equations (with plugin)

**Example:**
```md
::: tip Quick Tip
Use `Hyperswarm` for most P2P connections.
:::

::: code-group
```js [Hyperswarm]
const swarm = new Hyperswarm()
```

```js [HyperDHT]
const dht = new HyperDHT()
```
:::
```

### 5. **Search**

**Built-in options:**
1. **Local search** (free, instant)
2. **Algolia DocSearch** (free for open source, more powerful)

**Configuration:**
```js
// .vitepress/config.js
export default {
  themeConfig: {
    search: {
      provider: 'local', // or 'algolia'
      options: {
        // Search configuration
      }
    }
  }
}
```

### 6. **Community & Support**

**VitePress:**
- Created by Evan You (Vue.js creator)
- Used by: Vue.js docs, Vite docs, Vitest docs, Nuxt docs
- Active development
- Growing plugin ecosystem

**GitHub Stats:**
- 11k+ stars
- Active issues/PRs
- Regular releases

### 7. **Cost**

**VitePress:**
- ✅ Free and open source
- ✅ Self-hosted (Netlify, Vercel, GitHub Pages)
- ✅ No vendor lock-in

**GitBook:**
- 💰 Paid for custom domains
- 💰 Paid for advanced features
- ❌ Vendor lock-in

---

## Setup & Configuration

### Installation

```bash
# Initialize VitePress
npm init
npm install -D vitepress vue

# Create docs structure
mkdir docs
cd docs
mkdir .vitepress
```

### Configuration File

```js
// docs/.vitepress/config.js
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Pear Documentation',
  description: 'Build unstoppable P2P applications',
  
  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Learn', link: '/learn/' },
      { text: 'Build', link: '/build/quickstart/' },
      { text: 'Reference', link: '/reference/api/' },
      { text: 'Resources', link: '/resources/' }
    ],
    
    sidebar: {
      '/learn/': [
        {
          text: 'Core Concepts',
          items: [
            { text: 'What is P2P?', link: '/learn/concepts/what-is-p2p' },
            { text: 'How Pear Works', link: '/learn/concepts/how-pear-works' },
            { text: 'Security', link: '/learn/concepts/security' }
          ]
        },
        {
          text: 'Data Structures',
          items: [
            { text: 'Distributed Logs', link: '/learn/data-structures/distributed-logs' },
            { text: 'Databases', link: '/learn/data-structures/databases' },
            { text: 'File Systems', link: '/learn/data-structures/file-systems' }
          ]
        }
      ],
      '/build/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Quick Start', link: '/build/quickstart/' },
            { text: 'First App', link: '/build/tutorials/first-app' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/holepunchto' },
      { icon: 'discord', link: 'https://discord.gg/holepunch' }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Holepunch'
    }
  },
  
  markdown: {
    theme: 'github-dark',
    lineNumbers: true
  }
})
```

### Custom Theme

```js
// docs/.vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import PeerConnection from '../components/PeerConnection.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Register global components
    app.component('PeerConnection', PeerConnection)
  }
}
```

```css
/* docs/.vitepress/theme/custom.css */
:root {
  --vp-c-brand: #667eea;
  --vp-c-brand-light: #764ba2;
  --vp-c-brand-dark: #5568d3;
}
```

---

## Workflow

### Local Development

```bash
# Clone repository
git clone https://github.com/holepunchto/pear-docs
cd pear-docs

# Install dependencies
npm install

# Start dev server
npm run docs:dev
# Opens on http://localhost:5173
```

**Hot reload:** Changes reflect instantly in browser.

### Creating/Editing Pages

#### 1. Create New Page

```bash
# Create new markdown file
touch docs/learn/concepts/new-concept.md
```

```md
---
title: New Concept
description: Learn about this new concept
---

# New Concept

Your content here...
```

#### 2. Update Sidebar

```js
// docs/.vitepress/config.js
sidebar: {
  '/learn/': [
    {
      text: 'Core Concepts',
      items: [
        // Add new page
        { text: 'New Concept', link: '/learn/concepts/new-concept' }
      ]
    }
  ]
}
```

#### 3. Preview Changes

Dev server auto-reloads. Verify:
- Content renders correctly
- Links work
- Code examples highlight
- Images load

### Content Guidelines

#### File Structure

```
docs/
├── index.md                 # Homepage
├── learn/
│   ├── concepts/
│   │   └── *.md
│   ├── data-structures/
│   │   └── *.md
│   └── networking/
│       └── *.md
├── build/
│   ├── quickstart/
│   ├── tutorials/
│   └── guides/
├── reference/
│   └── api/
└── resources/
    └── examples/
```

#### Markdown Conventions

**Frontmatter:**
```yaml
---
title: Page Title
description: SEO description
outline: deep
---
```

**Headings:**
- H1: Page title (one per page)
- H2: Main sections
- H3: Subsections
- H4+: Details

**Code blocks:**
```js
// Always specify language
import Hyperswarm from 'hyperswarm'

// Add comments for clarity
const swarm = new Hyperswarm()
```

**Links:**
- Internal: `/learn/concepts/p2p` (absolute from docs root)
- External: `[GitHub](https://github.com/...)`
- Anchors: `[See API](#api-section)`

**Custom Containers:**
```md
::: tip
Helpful tip here
:::

::: warning
Warning message
:::

::: danger
Critical warning
:::

::: details Click to expand
Hidden content
:::
```

### Contributing Workflow

#### For Core Team

1. **Create branch:**
   ```bash
   git checkout -b docs/add-security-guide
   ```

2. **Make changes:**
   ```bash
   # Edit files
   vim docs/learn/concepts/security.md
   
   # Preview locally
   npm run docs:dev
   ```

3. **Commit:**
   ```bash
   git add docs/learn/concepts/security.md
   git commit -m "docs: add security guide"
   ```

4. **Push & create PR:**
   ```bash
   git push origin docs/add-security-guide
   # Create PR on GitHub
   ```

5. **Auto-preview:**
   - Netlify/Vercel automatically deploys preview
   - Review URL appears in PR

6. **Review & merge:**
   - Team reviews
   - Merge to main
   - Auto-deploys to production

#### For Community Contributors

1. **Fork repository**
2. **Clone fork:**
   ```bash
   git clone https://github.com/your-username/pear-docs
   ```

3. **Create branch:**
   ```bash
   git checkout -b docs/fix-typo
   ```

4. **Make changes & test locally**

5. **Submit PR:**
   - Push to fork
   - Open PR to main repository
   - Wait for review

### Review Checklist

**Content:**
- [ ] Technically accurate
- [ ] Clear and concise
- [ ] Follows style guide
- [ ] No broken links
- [ ] Code examples work
- [ ] Grammar and spelling correct

**Technical:**
- [ ] Builds without errors
- [ ] No console warnings
- [ ] Images optimized
- [ ] Markdown lints clean
- [ ] Frontmatter complete

**SEO:**
- [ ] Title descriptive
- [ ] Description present
- [ ] Keywords included
- [ ] Headings hierarchical

---

## Deployment

### Continuous Deployment

**GitHub Actions workflow:**

```yaml
# .github/workflows/deploy.yml
name: Deploy Documentation

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - run: npm ci
      - run: npm run docs:build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

### Hosting Options

#### Option 1: Netlify (Recommended)

**Pros:**
- Free for open source
- Automatic preview deploys
- Custom domain
- Edge CDN
- Zero config

**Setup:**
1. Connect GitHub repo to Netlify
2. Build command: `npm run docs:build`
3. Publish directory: `docs/.vitepress/dist`
4. Deploy!

#### Option 2: Vercel

**Pros:**
- Free for personal/open source
- Excellent performance
- Preview deploys
- Edge functions available

**Setup:** Similar to Netlify

#### Option 3: GitHub Pages

**Pros:**
- Free
- Integrated with GitHub
- Simple setup

**Cons:**
- Less flexible
- No preview deploys out of the box

### Custom Domain

```js
// docs/.vitepress/config.js
export default {
  base: '/', // For custom domain
  // base: '/pear-docs/', // For GitHub Pages
}
```

**DNS Configuration:**
```
docs.pears.com CNAME -> pear-docs.netlify.app
```

---

## Maintenance

### Regular Tasks

**Weekly:**
- Review open PRs
- Check broken links
- Monitor analytics
- Update dependencies

**Monthly:**
- Review most-searched terms
- Identify content gaps
- Update examples for new versions
- Optimize slow pages

**Quarterly:**
- Major content audits
- User feedback surveys
- Competitive analysis
- Framework updates

### Analytics Integration

**Google Analytics:**
```js
// docs/.vitepress/config.js
export default {
  head: [
    ['script', { 
      async: true, 
      src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' 
    }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `]
  ]
}
```

**Track:**
- Page views
- Search queries
- Bounce rate
- Time on page
- User flow

### Version Management

**Strategy:**
- Main branch = latest version
- Version branches for old versions
- Version selector in UI

**Example:**
```js
// docs/.vitepress/config.js
export default {
  themeConfig: {
    nav: [
      {
        text: 'v2.0',
        items: [
          { text: 'v2.0 (latest)', link: '/' },
          { text: 'v1.5', link: 'https://v1.docs.pears.com' },
          { text: 'Changelog', link: '/changelog' }
        ]
      }
    ]
  }
}
```

---

## Migration from GitBook

### Step-by-Step Process

#### Phase 1: Preparation (Week 1)

1. **Audit existing content**
   - List all pages
   - Identify popular pages (analytics)
   - Note external links to docs

2. **Set up VitePress**
   - Initialize project
   - Configure basic theme
   - Test build

#### Phase 2: Content Migration (Week 2-3)

1. **Convert markdown**
   - Export from GitBook
   - Fix formatting issues
   - Update image paths
   - Convert custom GitBook syntax

2. **Reorganize**
   - Follow new structure
   - Split large pages
   - Consolidate small pages

3. **Enhance**
   - Add custom containers
   - Improve code examples
   - Add diagrams

#### Phase 3: Testing (Week 4)

1. **Internal testing**
   - Check all links
   - Verify search works
   - Test on mobile
   - Cross-browser testing

2. **External testing**
   - Beta with select developers
   - Gather feedback
   - Iterate

#### Phase 4: Launch (Week 5)

1. **Set up redirects**
   ```
   /old-path -> /new-path
   ```

2. **Deploy**
   - Deploy to production domain
   - Verify DNS
   - Monitor for issues

3. **Announce**
   - Blog post
   - Twitter/Social
   - Update links

#### Phase 5: Post-Launch (Ongoing)

1. **Monitor**
   - Check analytics
   - Watch for 404s
   - Monitor community feedback

2. **Iterate**
   - Fix issues
   - Add missing content
   - Optimize based on usage

---

## Cost Breakdown

### Setup Costs

| Item | Cost |
|------|------|
| Domain (docs.pears.com) | $12/year |
| Hosting (Netlify) | $0 (open source) |
| Search (Algolia DocSearch) | $0 (open source) |
| **Total** | **$12/year** |

### Time Investment

| Phase | Hours | Notes |
|-------|-------|-------|
| Initial setup | 8h | VitePress config, theme |
| Content migration | 40h | Converting + improving |
| Testing | 16h | QA, fixes |
| Launch | 4h | Deployment, monitoring |
| **Total** | **68h** | ~2 weeks full-time |

### Ongoing Maintenance

- **Weekly**: 2-4 hours
- **Monthly**: 8 hours
- **Per year**: ~150 hours

---

## Alternative Considered: Custom Solution

### Why NOT Custom?

**Pros of custom:**
- ✅ Complete control
- ✅ Tailored to exact needs
- ✅ Unique features

**Cons of custom:**
- ❌ High development time (200+ hours)
- ❌ Ongoing maintenance burden
- ❌ Need to rebuild basic features
- ❌ Less community support
- ❌ More bugs initially

**Verdict:** VitePress provides 90% of what we need with 10% of the effort.

---

## Conclusion

**VitePress is the optimal choice because:**

1. **Performance** - Fast builds, fast loads
2. **DX** - Excellent developer experience
3. **Customization** - Flexible enough for our needs
4. **Cost** - Free and open source
5. **Community** - Active and growing
6. **Maintenance** - Low overhead
7. **Migration** - Straightforward from GitBook

**Workflow benefits:**

1. **Git-based** - Version control, collaboration
2. **Automated** - CI/CD for preview and production
3. **Flexible** - Easy to contribute and maintain
4. **Scalable** - Grows with documentation needs

**Timeline:** 2 weeks for full migration  
**Cost:** $12/year (domain only)  
**Maintenance:** ~3 hours/week

---

**Document Version**: 1.0  
**Date**: November 1, 2025  
**Author**: Technical Documentation Lead

