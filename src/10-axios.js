const axios = require('axios');

axios
  .post('http://127.0.0.1:3000', { p: 'Hello Axios!' })
  .then((res) => {
    console.log(`Status Code: ${res.status}, ${res.statusText}\n`);
    console.log(`${res.request.res.statusCode}, ${res.request.res.statusMessage}\n`);
    console.log(res);
    console.log(res.data);
  })
  .catch(console.error);
