const axios = require('axios');

axios
  .post('http://127.0.0.1:3000', { p: 'Hello TS!' })
  .then((res) => {
    console.log(`Status Code: ${res.status}, ${res.statusText}`);
    console.log(res);
  })
  .catch(console.error);
