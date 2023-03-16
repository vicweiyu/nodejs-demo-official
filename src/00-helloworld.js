const http = require('http');

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello NodeJS!\n');
});

server.listen(port, host, () => {
  console.log(`HTTP Server is running on ${host}:${port}...`);
});

// process.exitCode = 0;

// console.log(`Run 'process.exit(0);'`);
// process.exit(0);

// npx cross-env NODE_ENV=development node src/00-helloworld.js
// export NODE_ENV=development && node src/00-helloworld.js
console.log(process.env.NODE_ENV);

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('HTTP Server is closed');
  });
});

setTimeout(() => {
  console.log('SIGTERM Start', process.pid);
  process.kill(process.pid, 'SIGTERM');
  console.log('SIGTERM End');
}, 10 * 1000);
