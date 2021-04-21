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
  console.log('HTTP Server is running...');
});

console.log(process.env.NODE_ENV); // TODO

setTimeout(() => {
  process.kill(process.pid, 'SIGTERM');
}, 10 * 1000);
