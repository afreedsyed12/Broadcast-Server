# Broadcast-Server
Build a server that can broadcast messages to connected clients.
# 🔊 Broadcast Server (CLI-based WebSocket Chat)

A simple CLI-based broadcast server built using Node.js and WebSocket. This project demonstrates real-time communication between clients and servers — similar to how chat apps, live scoreboards, or multiplayer games work.

---

## 🎯 Goal

The goal of this project is to help you understand how to work with **WebSockets** and implement real-time communication between clients and a server. You'll learn how real-time features in apps like:

- Chat applications 💬  
- Live scoreboards 📈  
- Collaborative platforms 🤝  

...actually work behind the scenes.

---

## 🛠️ Features

- CLI-based interaction
- Real-time message broadcasting to all connected clients
- Unique client identifiers using UUID
- Supports multiple clients simultaneously
- Graceful client disconnection handling
- Easy-to-extend architecture

---

## 🚀 Commands

You can use the following commands to interact with the app:

### Start the server:

```bash
node index.js start


# Start server
node index.js start --port 9000

# In a new terminal, connect client 1
node index.js connect --url ws://localhost:9000

# In another terminal, connect client 2
node index.js connect --url ws://localhost:9000

# Type messages and watch them broadcast in real time
