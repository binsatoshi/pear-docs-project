# Your First P2P Application

Build a complete peer-to-peer chat application with a beautiful UI in 30 minutes.

## What You'll Build

A real-time chat app where:
- 💬 Multiple users can join a chat room
- 🔒 Messages are encrypted end-to-end
- 🌐 No servers needed - purely peer-to-peer
- 🎨 Modern, responsive UI
- 📱 Works on Desktop (Windows, Mac, Linux)

![Final Chat App](/assets/chat-app-1.png)

:::tip What You'll Learn
- Setting up a Pear desktop project
- Using Hyperswarm for peer discovery
- Building an interactive UI
- Managing P2P connections
- Best practices for P2P apps
:::

---

## Prerequisites

- **Node.js 18+** installed
- **Pear CLI** installed (`npm install -g pear`)
- **15-30 minutes** of focused time
- Basic JavaScript knowledge

---

## Step 1: Create Your Project

Create a new directory and initialize:

```bash
mkdir p2p-chat
cd p2p-chat
pear init -y -t desktop
```

This creates:
```
p2p-chat/
├── package.json      # Project config
├── index.html        # Your UI
└── app.js           # Application logic
```

---

## Step 2: Install Dependencies

```bash
npm install hyperswarm hypercore-crypto b4a
```

**What these do:**
- **hyperswarm** - Peer discovery and networking
- **hypercore-crypto** - Cryptographic utilities
- **b4a** - Buffer/string conversions

---

## Step 3: Build the UI

Replace `index.html` with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>P2P Chat</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #titlebar {
      -webkit-app-region: drag;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 30px;
      background: rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      padding: 0 10px;
      z-index: 1000;
    }

    .container {
      width: 90%;
      max-width: 800px;
      height: 80vh;
      background: white;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    /* Setup Screen */
    #setup {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 3rem;
      text-align: center;
    }

    #setup h1 {
      color: #667eea;
      margin-bottom: 1rem;
      font-size: 2.5rem;
    }

    #setup p {
      color: #666;
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }

    .btn {
      background: #667eea;
      color: white;
      border: none;
      padding: 1rem 2rem;
      font-size: 1.1rem;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s;
      font-weight: 600;
    }

    .btn:hover {
      background: #5568d3;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    }

    .divider {
      margin: 1.5rem 0;
      color: #999;
    }

    #join-form {
      display: flex;
      gap: 0.5rem;
      width: 100%;
      max-width: 500px;
    }

    #join-form input {
      flex: 1;
      padding: 1rem;
      border: 2px solid #e0e0e0;
      border-radius: 10px;
      font-size: 1rem;
      transition: border 0.3s;
    }

    #join-form input:focus {
      outline: none;
      border-color: #667eea;
    }

    /* Chat Screen */
    #chat {
      flex: 1;
      display: none;
      flex-direction: column;
    }

    #chat.active {
      display: flex;
    }

    .chat-header {
      background: #667eea;
      color: white;
      padding: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .chat-header h2 {
      font-size: 1.3rem;
    }

    .chat-info {
      font-size: 0.9rem;
      opacity: 0.9;
    }

    .topic-display {
      background: rgba(255, 255, 255, 0.2);
      padding: 0.5rem 1rem;
      border-radius: 5px;
      font-family: monospace;
      font-size: 0.85rem;
      margin-top: 0.5rem;
      word-break: break-all;
    }

    #messages {
      flex: 1;
      padding: 1.5rem;
      overflow-y: auto;
      background: #f5f5f5;
    }

    .message {
      margin-bottom: 1rem;
      animation: slideIn 0.3s;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .message-author {
      font-weight: 600;
      color: #667eea;
      margin-bottom: 0.25rem;
    }

    .message-content {
      background: white;
      padding: 0.75rem 1rem;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    }

    .message.own .message-author {
      color: #764ba2;
    }

    .message.own .message-content {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    #message-form {
      padding: 1.5rem;
      background: white;
      border-top: 1px solid #e0e0e0;
      display: flex;
      gap: 0.5rem;
    }

    #message-input {
      flex: 1;
      padding: 1rem;
      border: 2px solid #e0e0e0;
      border-radius: 10px;
      font-size: 1rem;
    }

    #message-input:focus {
      outline: none;
      border-color: #667eea;
    }

    .hidden {
      display: none !important;
    }
  </style>
  <script type="module" src="./app.js"></script>
</head>
<body>
  <div id="titlebar">
    <pear-ctrl></pear-ctrl>
  </div>

  <div class="container">
    <!-- Setup Screen -->
    <div id="setup">
      <h1>🍐 P2P Chat</h1>
      <p>Secure, serverless, peer-to-peer messaging</p>
      
      <button class="btn" id="create-btn">Create Chat Room</button>
      
      <div class="divider">or</div>
      
      <form id="join-form">
        <input 
          type="text" 
          id="topic-input" 
          placeholder="Paste chat room topic..."
          required
        >
        <button type="submit" class="btn">Join</button>
      </form>
    </div>

    <!-- Chat Screen -->
    <div id="chat">
      <div class="chat-header">
        <div>
          <h2>Chat Room</h2>
          <div class="chat-info">
            <span id="peer-count">0</span> peer(s) connected
          </div>
          <div class="topic-display" id="topic-display"></div>
        </div>
      </div>
      
      <div id="messages"></div>
      
      <form id="message-form">
        <input 
          type="text" 
          id="message-input" 
          placeholder="Type a message..."
          autocomplete="off"
        >
        <button type="submit" class="btn">Send</button>
      </form>
    </div>
  </div>
</body>
</html>
```

**Key UI features:**
- Clean, modern design
- Draggable window (using `pear-ctrl`)
- Smooth animations
- Responsive layout
- Clear visual hierarchy

---

## Step 4: Add Application Logic

Replace `app.js` with:

```javascript
/* global Pear */
import Hyperswarm from 'hyperswarm'
import crypto from 'hypercore-crypto'
import b4a from 'b4a'

// Pear utilities
const { teardown, updates } = Pear

// Initialize swarm
const swarm = new Hyperswarm()

// Cleanup on exit
teardown(() => swarm.destroy())

// Enable hot reload during development
updates(() => Pear.reload())

// Track connections and messages
const connections = new Set()

// DOM elements
const setupScreen = document.querySelector('#setup')
const chatScreen = document.querySelector('#chat')
const createBtn = document.querySelector('#create-btn')
const joinForm = document.querySelector('#join-form')
const topicInput = document.querySelector('#topic-input')
const topicDisplay = document.querySelector('#topic-display')
const messagesContainer = document.querySelector('#messages')
const messageForm = document.querySelector('#message-form')
const messageInput = document.querySelector('#message-input')
const peerCount = document.querySelector('#peer-count')

// Event Listeners
createBtn.addEventListener('click', createRoom)
joinForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const topic = topicInput.value.trim()
  if (topic) joinRoom(topic)
})
messageForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const message = messageInput.value.trim()
  if (message) sendMessage(message)
})

// Handle new peer connections
swarm.on('connection', (peer) => {
  connections.add(peer)
  updatePeerCount()
  
  // Get peer identifier (first 6 chars of public key)
  const peerId = b4a.toString(peer.remotePublicKey, 'hex').slice(0, 6)
  
  // Handle incoming messages
  peer.on('data', (data) => {
    const message = data.toString()
    addMessage(peerId, message, false)
  })
  
  // Handle disconnections
  peer.on('close', () => {
    connections.delete(peer)
    updatePeerCount()
  })
  
  peer.on('error', (err) => {
    console.error('Peer error:', err)
    connections.delete(peer)
    updatePeerCount()
  })
})

// Update peer count display
swarm.on('update', updatePeerCount)

/**
 * Create a new chat room
 */
async function createRoom() {
  const topicBuffer = crypto.randomBytes(32)
  const topicString = b4a.toString(topicBuffer, 'hex')
  await joinRoom(topicString)
}

/**
 * Join an existing chat room
 */
async function joinRoom(topicString) {
  const topicBuffer = b4a.from(topicString, 'hex')
  
  // Join the swarm
  const discovery = swarm.join(topicBuffer, { 
    server: true,  // Accept connections
    client: true   // Search for peers
  })
  
  // Wait for the topic to be announced
  await discovery.flushed()
  
  // Update UI
  setupScreen.classList.add('hidden')
  chatScreen.classList.add('active')
  topicDisplay.textContent = topicString
  messageInput.focus()
  
  addSystemMessage(`🎉 Joined chat room! Share this topic with friends:`)
  addSystemMessage(topicString)
}

/**
 * Send a message to all connected peers
 */
function sendMessage(message) {
  // Display locally
  addMessage('You', message, true)
  
  // Send to all peers
  for (const peer of connections) {
    try {
      peer.write(message)
    } catch (err) {
      console.error('Error sending message:', err)
    }
  }
  
  // Clear input
  messageInput.value = ''
}

/**
 * Add a message to the chat
 */
function addMessage(author, content, isOwn = false) {
  const messageEl = document.createElement('div')
  messageEl.className = `message ${isOwn ? 'own' : ''}`
  
  messageEl.innerHTML = `
    <div class="message-author">${author}</div>
    <div class="message-content">${escapeHtml(content)}</div>
  `
  
  messagesContainer.appendChild(messageEl)
  messagesContainer.scrollTop = messagesContainer.scrollHeight
}

/**
 * Add a system message
 */
function addSystemMessage(content) {
  const messageEl = document.createElement('div')
  messageEl.className = 'message'
  messageEl.innerHTML = `
    <div class="message-content" style="background: #f0f0f0; color: #666; font-style: italic;">
      ${escapeHtml(content)}
    </div>
  `
  messagesContainer.appendChild(messageEl)
  messagesContainer.scrollTop = messagesContainer.scrollHeight
}

/**
 * Update peer count display
 */
function updatePeerCount() {
  peerCount.textContent = connections.size
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}
```

---

## Step 5: Test Your App

### Launch the App

```bash
pear run --dev .
```

The app opens with the setup screen:

![Setup Screen](../../../assets/chat-app-1.png)

### Create a Room

1. Click **"Create Chat Room"**
2. You'll see a hexadecimal topic displayed
3. Copy this topic

### Join from Another Instance

Open a new terminal and run:

```bash
cd p2p-chat
pear run --dev .
```

1. Paste the topic into the input field
2. Click **"Join"**
3. The peers will connect automatically!

### Start Chatting

Type messages in either window and watch them appear in both!

![Chat in Action](../../../assets/chat-app-2.png)

---

## Understanding the Code

### Key Components

#### 1. **Swarm Initialization**

```javascript
const swarm = new Hyperswarm()
teardown(() => swarm.destroy())
```

Creates the networking instance and ensures cleanup when the app closes.

#### 2. **Creating a Room**

```javascript
const topicBuffer = crypto.randomBytes(32)
swarm.join(topicBuffer, { server: true, client: true })
```

Generates a random 32-byte topic and joins the swarm as both server (accepting connections) and client (searching for peers).

#### 3. **Connection Handling**

```javascript
swarm.on('connection', (peer) => {
  connections.add(peer)
  peer.on('data', (data) => {
    // Handle incoming messages
  })
})
```

Listens for new peer connections and handles their messages.

#### 4. **Broadcasting Messages**

```javascript
for (const peer of connections) {
  peer.write(message)
}
```

Sends messages to all connected peers.

---

## Enhancements to Try

### 1. **Add Username Support**

```javascript
// Store username
let username = prompt('Enter your username:')

// Send as JSON
peer.write(JSON.stringify({
  type: 'message',
  author: username,
  content: message,
  timestamp: Date.now()
}))
```

### 2. **Persistent Chat History**

Use Hypercore to store messages:

```javascript
import Hypercore from 'hypercore'

const messageLog = new Hypercore('./chat-history')

// Append messages
await messageLog.append(JSON.stringify({
  author,
  content,
  timestamp: Date.now()
}))

// Read history on startup
for (let i = 0; i < messageLog.length; i++) {
  const msg = JSON.parse(await messageLog.get(i))
  addMessage(msg.author, msg.content)
}
```

### 3. **File Sharing**

Add drag-and-drop file sharing:

```javascript
document.addEventListener('drop', async (e) => {
  e.preventDefault()
  const file = e.dataTransfer.files[0]
  const buffer = await file.arrayBuffer()
  
  // Send file to peers
  for (const peer of connections) {
    peer.write(JSON.stringify({
      type: 'file',
      name: file.name,
      data: Buffer.from(buffer).toString('base64')
    }))
  }
})
```

### 4. **Typing Indicators**

```javascript
messageInput.addEventListener('input', () => {
  for (const peer of connections) {
    peer.write(JSON.stringify({ type: 'typing' }))
  }
})
```

---

## Troubleshooting

### Peers Won't Connect

**Problem**: Two instances can't find each other

**Solutions**:
1. Verify both instances use the exact same topic (copy-paste carefully)
2. Wait 10-15 seconds for DHT discovery
3. Check firewall settings (UDP must be allowed)
4. Try on the same network first

### Messages Not Appearing

**Problem**: Messages sent but not received

**Debug**:
```javascript
peer.on('data', (data) => {
  console.log('Received:', data.toString())
  // Your message handling
})
```

Check both sender and receiver logs.

### App Crashes on Startup

**Problem**: Module import errors

**Solution**:
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install hyperswarm hypercore-crypto b4a
```

---

## What You Learned

✅ Setting up a Pear desktop application  
✅ Using Hyperswarm for peer discovery  
✅ Managing P2P connections and state  
✅ Building an interactive UI with vanilla JS  
✅ Broadcasting messages to multiple peers  
✅ Handling connection lifecycle events  

---

## Next Steps

<div class="next-steps">

### 🔐 **Add Persistence**
Learn to store messages using Hypercore
[Data Structures Tutorial →](/learn/data-structures/)

### 📱 **Deploy Your App**
Package and share your chat app
[Releasing a Pear App →](/build/guides/releasing)

### 🎨 **Use React/Vue**
Build with modern frameworks
[React with Pear →](/build/guides/react-integration)

### 🔍 **Explore Examples**
See more advanced P2P apps
[Examples Gallery →](/resources/examples/)

</div>

---

## Challenge: Extend Your App

Try adding these features:

- [ ] Message timestamps
- [ ] Emoji support
- [ ] Dark mode toggle
- [ ] Sound notifications
- [ ] Message persistence with Hypercore
- [ ] Private messaging (direct peer connections)
- [ ] Rich text formatting
- [ ] Image sharing

Share your creations in our [Discord community](https://discord.gg/holepunch)!

<style>
.next-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.next-steps > div {
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}
</style>

