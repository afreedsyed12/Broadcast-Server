#!/usr/bin/env node
const { Command } = require('commander');
const { startServer } = require('./server');
const { startClient } = require('./client');

const program = new Command();

program
  .name('broadcast-server')
  .description('A simple WebSocket broadcast server and client CLI tool')
  .version('1.0.0');

program
  .command('start')
  .description('Start the WebSocket broadcast server')
  .option('-p, --port <port>', 'Port to listen on', '8080')
  .action((options) => {
    startServer(parseInt(options.port));
  });

program
  .command('connect')
  .description('Connect a client to the broadcast server')
  .option('-u, --url <url>', 'WebSocket server URL', 'ws://localhost:8080')
  .action((options) => {
    startClient(options.url);
  });

program.parse(process.argv);


// TO RUN
//node index.js connect --url ws://localhost:9000