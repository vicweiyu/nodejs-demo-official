const http = require('http');
const port = 3000;
const host = '127.0.0.1';

const server = http.createServer((req, res) => {
  let data = '';

  req.on('data', (chunk) => {
    console.log('in data');
    data += chunk;
  });

  req.on('end', () => {
    console.log('in end');
    console.log(JSON.parse(data));

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello NodeJS!');
  });
});

server.listen(port, () => {
  console.log('HTTP Server is Starting...');
});
