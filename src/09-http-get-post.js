const http = require('http');

const options1 = {
  host: '127.0.0.1',
  port: 3000,
  path: '/',
  method: 'GET',
};

const reqGet = http.request(options1, (res) => {
  console.log(`Status Code: ${res.statusCode}, ${res.statusMessage}`);

  res.on('data', (data) => {
    process.stdout.write(data + '\n');
  });
});

reqGet.on('error', console.log);

reqGet.end();

console.log('********************');

const postDate = JSON.stringify({
  p: 'Hello TS!',
});

const options2 = {
  host: '127.0.0.1',
  port: 3000,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': postDate.length,
  },
};

const httpPost = http.request(options2, (res) => {
  console.log(`Status Code: ${res.statusCode}, ${res.statusMessage}`);

  res.on('data', (data) => {
    process.stdout.write(data + '\n');
  });
});

httpPost.on('error', console.log);

httpPost.end();
