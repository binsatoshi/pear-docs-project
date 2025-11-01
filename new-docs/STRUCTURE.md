# New Documentation Structure

This document outlines the complete reorganized documentation structure for Pear Runtime.

## Navigation Hierarchy

```
📘 Pear Documentation
│
├── 🏠 Home                                    [IMPLEMENTED]
│   └── index.md
│
├── 📚 Learn
│   ├── Core Concepts                         [IMPLEMENTED]
│   │   ├── index.md (Overview)
│   │   ├── what-is-p2p.md                    [PLACEHOLDER]
│   │   ├── how-pear-works.md                 [PLACEHOLDER]
│   │   ├── when-to-use-pear.md               [PLACEHOLDER]
│   │   └── security.md                       [PLACEHOLDER]
│   │
│   ├── Data Structures
│   │   ├── index.md (Overview)               [PLACEHOLDER]
│   │   ├── distributed-logs.md               [PLACEHOLDER]
│   │   │   (Hypercore explained)
│   │   ├── databases.md                      [PLACEHOLDER]
│   │   │   (Hyperbee explained)
│   │   ├── file-systems.md                   [PLACEHOLDER]
│   │   │   (Hyperdrive explained)
│   │   └── multi-writer.md                   [PLACEHOLDER]
│   │       (Autobase explained)
│   │
│   └── Networking
│       ├── index.md (Overview)               [PLACEHOLDER]
│       ├── peer-discovery.md                 [PLACEHOLDER]
│       │   (Hyperswarm explained)
│       ├── direct-connections.md             [PLACEHOLDER]
│       │   (HyperDHT explained)
│       └── advanced-patterns.md              [PLACEHOLDER]
│
├── 🏗️ Build
│   ├── Quickstart                            [IMPLEMENTED]
│   │   └── index.md
│   │
│   ├── Tutorials
│   │   ├── first-app.md                      [IMPLEMENTED]
│   │   ├── chat-with-persistence.md          [PLACEHOLDER]
│   │   ├── file-sharing-app.md               [PLACEHOLDER]
│   │   ├── collaborative-editor.md           [PLACEHOLDER]
│   │   └── p2p-game.md                       [PLACEHOLDER]
│   │
│   └── Guides
│       ├── Platform Guides
│       │   ├── desktop-apps.md               [PLACEHOLDER]
│       │   ├── terminal-apps.md              [PLACEHOLDER]
│       │   └── mobile-apps.md                [PLACEHOLDER]
│       │
│       ├── Framework Integration
│       │   ├── react-integration.md          [PLACEHOLDER]
│       │   ├── vue-integration.md            [PLACEHOLDER]
│       │   └── electron-migration.md         [PLACEHOLDER]
│       │
│       └── Advanced Topics
│           ├── custom-replication.md         [PLACEHOLDER]
│           ├── encryption.md                 [PLACEHOLDER]
│           ├── performance-tuning.md         [PLACEHOLDER]
│           ├── testing-p2p-apps.md           [PLACEHOLDER]
│           ├── debugging.md                  [PLACEHOLDER]
│           ├── releasing.md                  [PLACEHOLDER]
│           └── best-practices.md             [PLACEHOLDER]
│
├── 📖 Reference
│   ├── API                                   [IMPLEMENTED]
│   │   ├── index.md (Overview)
│   │   ├── pear-runtime.md                   [PLACEHOLDER]
│   │   ├── hypercore.md                      [PLACEHOLDER]
│   │   ├── hyperbee.md                       [PLACEHOLDER]
│   │   ├── hyperdrive.md                     [PLACEHOLDER]
│   │   ├── hyperswarm.md                     [PLACEHOLDER]
│   │   ├── hyperdht.md                       [PLACEHOLDER]
│   │   ├── autobase.md                       [PLACEHOLDER]
│   │   ├── corestore.md                      [PLACEHOLDER]
│   │   └── helpers.md                        [PLACEHOLDER]
│   │
│   ├── CLI
│   │   ├── index.md                          [PLACEHOLDER]
│   │   ├── commands.md                       [PLACEHOLDER]
│   │   └── flags.md                          [PLACEHOLDER]
│   │
│   ├── Configuration
│   │   ├── package.json.md                   [PLACEHOLDER]
│   │   ├── app-config.md                     [PLACEHOLDER]
│   │   └── runtime-config.md                 [PLACEHOLDER]
│   │
│   └── Bare Runtime
│       ├── overview.md                       [PLACEHOLDER]
│       ├── api.md                            [PLACEHOLDER]
│       ├── modules.md                        [PLACEHOLDER]
│       └── node-compatibility.md             [PLACEHOLDER]
│
└── 🔧 Resources
    ├── Examples
    │   ├── index.md (Gallery)                [PLACEHOLDER]
    │   ├── chat-app.md                       [PLACEHOLDER]
    │   ├── file-sharing.md                   [PLACEHOLDER]
    │   ├── collaborative-db.md               [PLACEHOLDER]
    │   ├── cross-platform.md                 [PLACEHOLDER]
    │   ├── iot-network.md                    [PLACEHOLDER]
    │   └── game-server.md                    [PLACEHOLDER]
    │
    ├── Troubleshooting
    │   ├── index.md                          [PLACEHOLDER]
    │   ├── connection-issues.md              [PLACEHOLDER]
    │   ├── installation.md                   [PLACEHOLDER]
    │   └── common-errors.md                  [PLACEHOLDER]
    │
    ├── Migration
    │   ├── from-v1.md                        [PLACEHOLDER]
    │   └── from-nodejs.md                    [PLACEHOLDER]
    │
    ├── FAQ                                   [PLACEHOLDER]
    │   └── index.md
    │
    └── Community
        ├── contributing.md                   [PLACEHOLDER]
        ├── support.md                        [PLACEHOLDER]
        └── showcase.md                       [PLACEHOLDER]
```

---

## Key Structural Improvements

### 1. **User-Centric Organization**

**Before:** Organized by module type (Building Blocks, Helpers, Tools)  
**After:** Organized by user intent (Learn, Build, Reference, Resources)

**Rationale:** Developers think in terms of tasks, not module categories. "I want to build a chat app" vs "I need to know about Hypercore"

### 2. **Progressive Learning Path**

**Path Structure:**
1. **Home** → Understand value proposition (2 min)
2. **Quickstart** → Get something working (5 min)
3. **Core Concepts** → Understand fundamentals (15 min)
4. **First App Tutorial** → Build real application (30 min)
5. **Advanced Guides** → Master specific topics (ongoing)

**Rationale:** Mirrors successful documentation like Solana's "Getting Started → Core Concepts → Build" flow

### 3. **Simplified Terminology**

**Approach:**
- Introduce concepts with plain language first
- Then introduce technical terms
- Use consistent naming throughout

**Example:**
```
"Distributed Logs (Hypercore)"
└── Introduces concept before jargon
```

### 4. **Contextual Navigation**

Each page includes:
- **Where you are** - Breadcrumbs
- **What's next** - Related/next steps
- **Quick actions** - Jump to common tasks

### 5. **Multiple Entry Points**

**For different user types:**
- **New developers** → Home → Quickstart
- **Experienced P2P devs** → Core Concepts → API
- **Specific problem** → Search → Relevant guide
- **Migrating** → Migration guides

---

## Content Categorization

### Learn (Conceptual)

**Purpose:** Build mental models  
**Style:** Explanatory, visual, conceptual  
**Success metric:** "I understand when/why to use this"

**Key pages:**
- What is P2P?
- How Pear works
- Data structure concepts
- Networking concepts
- Security model

### Build (Practical)

**Purpose:** Get things done  
**Style:** Step-by-step, code-heavy, actionable  
**Success metric:** "I built something that works"

**Key pages:**
- Quickstart (5 min win)
- First app tutorial (complete project)
- Platform guides (Desktop/Terminal/Mobile)
- Framework integration (React, Vue)
- Advanced patterns

### Reference (Technical)

**Purpose:** Look up specifics  
**Style:** Comprehensive, technical, searchable  
**Success metric:** "I found the exact method signature I needed"

**Key pages:**
- Complete API documentation
- CLI reference
- Configuration options
- Type definitions

### Resources (Supporting)

**Purpose:** Solve problems, get inspired  
**Style:** Practical examples, troubleshooting, community  
**Success metric:** "I found a solution" or "I'm inspired to build"

**Key pages:**
- Working examples
- Troubleshooting guides
- Migration guides
- FAQ
- Community showcase

---

## Navigation Features

### Sidebar Structure

```
Home
├─ Learn
│  ├─ Core Concepts (collapsed)
│  ├─ Data Structures (collapsed)
│  └─ Networking (collapsed)
├─ Build
│  ├─ Quickstart
│  ├─ Tutorials (collapsed)
│  └─ Guides (collapsed)
├─ Reference
│  ├─ API (collapsed)
│  ├─ CLI
│  └─ Configuration
└─ Resources
   ├─ Examples
   ├─ Troubleshooting
   └─ FAQ
```

### Search Strategy

**Searchable content:**
- All page titles
- Section headings
- Code comments
- Alt text

**Search weighting:**
1. Page titles (highest)
2. Section headings
3. First paragraphs
4. Code examples
5. Body text

### Cross-Linking

**Link types:**
1. **Prerequisite links** - "Before this, read..."
2. **Related concept links** - "Learn more about..."
3. **Implementation links** - "See this in action..."
4. **Next step links** - "Now that you know this, try..."

---

## Content Migration Map

Maps old structure to new structure:

| Old Location | New Location | Changes |
|--------------|-------------|----------|
| `README.md` | `index.md` | Rewritten as landing page |
| `guide/getting-started.md` | `build/quickstart/index.md` | Streamlined, code-first |
| `building-blocks/hypercore.md` | `learn/data-structures/distributed-logs.md` + `reference/api/hypercore.md` | Split: concepts vs API |
| `building-blocks/hyperswarm.md` | `learn/networking/peer-discovery.md` + `reference/api/hyperswarm.md` | Split: concepts vs API |
| `howto/*.md` | `build/tutorials/*.md` | Expanded into full tutorials |
| `guide/making-a-pear-desktop-app.md` | `build/tutorials/first-app.md` | Enhanced with more context |
| `reference/pear/api.md` | `reference/api/pear-runtime.md` | Renamed for clarity |
| `reference/pear/cli.md` | `reference/cli/index.md` | Enhanced with examples |
| `helpers/*.md` | `reference/api/helpers.md` | Consolidated |
| `tools/*.md` | `resources/examples/*.md` | Repositioned as examples |
| `apps/keet.md` | `resources/community/showcase.md` | Part of showcase |

---

## Visual Elements

### Diagrams Needed

1. **P2P vs Client-Server** - Architecture comparison
2. **How Pear Works** - High-level flow diagram
3. **Data Structure Hierarchy** - Hypercore → Hyperbee/Hyperdrive
4. **Peer Discovery Flow** - DHT lookup sequence
5. **Replication Process** - Block exchange visualization

### Code Playground

Interactive code editor for:
- Quick examples
- Testing code snippets
- Sharing experiments

**Implementation:** CodeSandbox or custom WebContainer

### Comparison Tables

1. **Data Structure Comparison** - When to use which
2. **Networking Options** - Hyperswarm vs HyperDHT
3. **Encoding Options** - Performance/compatibility
4. **Platform Capabilities** - Desktop vs Terminal vs Mobile

---

## Localization Strategy

**Phase 1:** English only  
**Phase 2:** Add internationalization framework  
**Phase 3:** Community translations (Spanish, Chinese, Japanese, Portuguese)

**Priority languages based on developer communities:**
1. English (primary)
2. Spanish
3. Chinese (Simplified)
4. Japanese
5. Portuguese (Brazilian)

---

## Maintenance Workflow

### Content Updates

1. **Edit markdown** in repository
2. **Create PR** with changes
3. **Auto-preview** deployment
4. **Review** by maintainers
5. **Merge** to production

### Version Management

- **Main branch** → Latest stable version
- **Version branches** → Previous versions (v1.x, v2.x)
- **Version selector** in UI to switch between versions

### Analytics

**Track:**
- Most visited pages
- Search queries with no results
- Page bounce rates
- Time on page
- User flow (entry → exit)

**Use to:**
- Identify content gaps
- Improve search
- Optimize learning paths
- Prioritize updates

---

## Next Steps for Full Implementation

1. **Create all placeholder pages** with skeleton content
2. **Migrate existing content** using the migration map
3. **Write new content** for conceptual pages
4. **Create diagrams** using tools like Excalidraw or Mermaid
5. **Set up VitePress** with custom theme
6. **Implement search** using Algolia or custom solution
7. **Add interactive elements** (code playground, live demos)
8. **User testing** with target developers
9. **Launch** with redirects from old URLs
10. **Iterate** based on analytics and feedback

---

## Success Metrics

### Quantitative
- **Time to first app**: < 15 minutes (target)
- **Documentation satisfaction**: > 4.5/5
- **Search success rate**: > 80%
- **Page bounce rate**: < 40%

### Qualitative
- Developers report feeling "confident" after tutorial
- Fewer "how do I..." questions in community
- Positive sentiment in developer feedback
- Increased GitHub stars/forks

---

**Status:** 5 key pages implemented, full structure defined  
**Next:** Complete placeholder pages and migrate content  
**Timeline:** 2-4 weeks for full implementation

