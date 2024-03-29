const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  /*
  fs.readFile('public/text.txt', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    res.end(data);
  });
  */

  const stream = fs.createReadStream('public/text.txt');
  stream.pipe(res);
});

server.listen(3000, '127.0.0.1', () => {
  console.log('HTTP Server is running...');
});

setTimeout(() => {
  console.log('HTTP Server is closing...');
  server.close((err) => {
    if (err) {
      console.log(err);
    }
    console.log('HTTP Server is closed.');
  });
}, 10 * 1000);
