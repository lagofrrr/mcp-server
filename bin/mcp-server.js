#!/usr/bin/env node
const {McpServer} = require('../lib/index.js');

const server = new McpServer();
// eslint-disable-next-line unicorn/prefer-top-level-await
server.listen().catch((error) => {
  console.error('Server error:', error);
  process.exit(1);
});
