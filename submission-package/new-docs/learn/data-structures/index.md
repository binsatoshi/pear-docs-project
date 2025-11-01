# Data Structures

> **Status:** PLACEHOLDER - Content to be developed

Choose the right data structure for your P2P application.

## Overview

Pear provides three main data structures, each optimized for different use cases:

### 📝 Distributed Logs (Hypercore)
**Best for:** Event streams, message histories, audit logs
[Learn more →](./distributed-logs)

### 🗄️ Key-Value Databases (Hyperbee)
**Best for:** Structured data, queries, indexes
[Learn more →](./databases)

### 📁 File Systems (Hyperdrive)
**Best for:** Files, directories, media
[Learn more →](./file-systems)

### 👥 Multi-Writer Logs (Autobase)
**Best for:** Collaborative applications, multiple authors
[Learn more →](./multi-writer)

## Quick Comparison

| Feature | Hypercore | Hyperbee | Hyperdrive |
|---------|-----------|----------|------------|
| Data type | Append-only blocks | Key-value pairs | Files & folders |
| Queries | By index | By key, ranges | By path |
| Use case | Logs, streams | Databases | File storage |
| Multi-writer | Via Autobase | Via Autobase | Single writer |

## Coming Soon

This section will include:
- Detailed explanations of each structure
- When to use which structure
- Performance characteristics
- Code examples and patterns
- Migration guides between structures

