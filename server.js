const WebSocket = require('ws');
const clients = new Set();

function startServer(port = 8080) {
  const wss = new WebSocket.Server({ port });
  console.log(`📡 Server started on ws://localhost:${port}`);

  wss.on('connection', (ws) => {
    console.log('✅ New client connected');
    clients.add(ws);

    ws.on('message', (data) => {
      try {
        const msg = JSON.parse(data);
        console.log(`[${msg.uuid}] ${msg.text}`);
        for (let client of clients) {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(msg));
          }
        }
      } catch {
        console.log('⚠️ Failed to parse message.');
      }
    });

    ws.on('close', () => {
      console.log('❌ Client disconnected');
      clients.delete(ws);
    });
  });
}

module.exports = { startServer };
