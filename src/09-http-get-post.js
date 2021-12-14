const http = require('http');

/*
const options1 = {
  host: '127.0.0.1',
  port: 3000,
  path: '/',
  method: 'GET',
};

const httpGet = http.request(options1, (res) => {
  console.log(`Status Code: ${res.statusCode}, ${res.statusMessage}`);

  res.on('data', (data) => {
    process.stdout.write(data + '\n');
  });
});

httpGet.on('error', console.error);

httpGet.end();
*/

console.log('********************');

const postData = JSON.stringify({
  p: 'Hello TS!',
});

const options2 = {
  host: '127.0.0.1',
  port: 3000,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': postData.length,
  },
};

const httpPost = http.request(options2, (res) => {
  console.log(`Status Code: ${res.statusCode}, ${res.statusMessage}`);

  let data = '';

  res.on('data', (chunk) => {
    console.log('in res data');
    data += chunk;
    process.stdout.write(chunk + '\n');
  });

  res.on('end', () => {
    console.log('in res end');
    process.stdout.write(data + '\n');
  });
});

httpPost.on('error', console.error);

httpPost.write(postData);
httpPost.end();
