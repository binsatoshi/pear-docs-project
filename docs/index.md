---
layout: home

hero:
  name: Build anything peer-to-peer
  tagline: Create local-first applications that scale infinitely without servers
  actions:
    - theme: brand
      text: Get Started
      link: /build/quickstart/
    - theme: alt
      text: View Examples
      link: /resources/examples/

features:
  - icon: 🚀
    title: Runtime
    details: Build and scale local-first apps on the most powerful P2P development platform.
    link: /learn/concepts/
  - icon: 📊
    title: Data
    details: Store and sync data across peers with distributed logs, databases, and file systems.
    link: /learn/data-structures/
  - icon: 🌐
    title: Networking
    details: Connect peers automatically with built-in discovery, encryption, and NAT traversal.
    link: /learn/networking/
  - icon: 🛠️
    title: Tools
    details: Deploy to desktop, terminal, and mobile from a single JavaScript codebase.
    link: /build/guides/
---

<div class="guides-section">

## Guides to get started

<div class="guide-cards">

<div class="guide-card">
  <h3>P2P fundamentals</h3>
  <p>Get started by learning the core concepts behind peer-to-peer applications and when to use Pear.</p>
  <a href="/learn/concepts/">Get started →</a>
</div>

<div class="guide-card">
  <h3>Build your first P2P app</h3>
  <p>Create a real-time chat application with peer discovery, encrypted connections, and a modern UI in 30 minutes.</p>
  <a href="/build/tutorials/first-app">Start tutorial →</a>
</div>

<div class="guide-card">
  <h3>Connect peers in 5 minutes</h3>
  <p>Install Pear and establish your first peer-to-peer connection with just a few lines of code.</p>
  <a href="/build/quickstart/">View quickstart →</a>
</div>

<div class="guide-card">
  <h3>Store data without servers</h3>
  <p>Learn to use distributed logs, key-value databases, and file systems that sync automatically between peers.</p>
  <a href="/learn/data-structures/">Start tutorial →</a>
</div>

<div class="guide-card">
  <h3>Real-time peer discovery</h3>
  <p>Find and connect to peers using topics across the DHT. No IP addresses or central servers required.</p>
  <a href="/learn/networking/peer-discovery">View quickstart →</a>
</div>

<div class="guide-card">
  <h3>Deploy cross-platform apps</h3>
  <p>Package and distribute your P2P applications for Windows, Mac, Linux, and mobile platforms.</p>
  <a href="/build/guides/releasing">Learn more →</a>
</div>

</div>

</div>

<style>
.guides-section {
  max-width: 1152px;
  margin: 80px auto 40px;
  padding: 0 24px;
}

.guides-section h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 48px;
  text-align: left;
}

.guide-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 32px;
}

.guide-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.25s;
}

.guide-card:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.guide-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: var(--vp-c-text-1);
}

.guide-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 0 0 16px 0;
}

.guide-card a {
  display: inline-block;
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration: none;
  transition: color 0.25s;
}

.guide-card a:hover {
  color: var(--vp-c-brand-dark);
}

@media (max-width: 768px) {
  .guide-cards {
    grid-template-columns: 1fr;
  }
  
  .guides-section {
    margin: 40px auto 20px;
  }
}
</style>

