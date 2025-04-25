const WebSocket = require('ws');
const readline = require('readline');
const { v4: uuidv4 } = require('uuid');

function startClient(url = 'ws://localhost:8080') {
  const ws = new WebSocket(url);
  const uuid = uuidv4(); // Generate a unique ID for this client

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  ws.on('open', () => {
    console.log(`✅ Connected to server as [${uuid}]`);
    rl.setPrompt('You: ');
    rl.prompt();

    rl.on('line', (line) => {
      if (line.toLowerCase() === 'exit') {
        rl.close();
        ws.close();
      } else {
        const messageObject = {
          uuid,
          text: line,
        };
        ws.send(JSON.stringify(messageObject));
        rl.prompt();
      }
    });
  });

  ws.on('message', (data) => {
    try {
      const msg = JSON.parse(data);
      console.log(`\n[${msg.uuid}]: ${msg.text}`);
    } catch {
      console.log('⚠️ Invalid message format received.');
    }
    rl.prompt();
  });

  ws.on('close', () => {
    console.log('❌ Disconnected from server');
    process.exit(0);
  });

  ws.on('error', (err) => {
    console.error('Error:', err.message);
  });
}

module.exports = { startClient };
