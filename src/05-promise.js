/*
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello Promise!');
  }, 2 * 1000);
});

p1.then((s) => {
  console.log(s);
  return 'NodeJS';
})
  .then((data) => {
    console.log(`Hello ${data}!`);
  })
  .catch(console.error);

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Error');
  }, 5 * 1000);
});

p2.catch((err) => {
  console.log(err);
  throw new Error('Error in Catch');
}).catch((err) => {
  console.log(err);
});
*/

const p3 = new Promise((resolve, reject) => {
  console.log('P3 Start');
  setTimeout(() => {
    resolve('p3');
  }, 1 * 1000);
});

const p4 = new Promise((resolve, reject) => {
  console.log('P4 Start');
  setTimeout(() => {
    resolve('p4');
  }, 3 * 1000);
});

/*
Promise.all([p3, p4]).then((results) => {
  console.log(results instanceof Array, results);
});
*/
Promise.all([p3, p4]).then(([r3, r4]) => {
  console.log(r3, r4);
});

const p5 = new Promise((resolve, reject) => {
  console.log('P5 Start');
  setTimeout(() => {
    resolve('p5');
  }, 1 * 1000);
});

const p6 = new Promise((resolve, reject) => {
  console.log('P6 Start');
  setTimeout(() => {
    resolve('p6');
  }, 3 * 1000);
});

Promise.race([p5, p6]).then((result) => {
  console.log(result);
});
