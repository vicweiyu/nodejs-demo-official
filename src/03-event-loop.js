const foo = () => {
  console.log('foo');
};

const bar = () => {
  console.log('bar');
};

const nt1 = () => {
  console.log('nt 1');
};

const nt2 = () => {
  console.log('nt 2');
};

const f = () => {
  foo();

  setImmediate(() => {
    console.log('setImmediate');
  });

  setTimeout(() => {
    console.log('setTimeout');
  }, 0);

  new Promise((resolve, reject) => {
    console.log('in Promise 1');
    resolve('after bar but before foo - a');
    console.log('in Promise 2');
  }).then(console.log);

  new Promise((resolve, reject) => {
    console.log('in Promise 3');
    resolve('after bar but before foo - b');
    console.log('in Promise 4');
  }).then(console.log);

  process.nextTick(nt1);
  process.nextTick(nt2);

  bar();
};

// f();

console.log('********************');

let arr = [];

const f2 = () => {
  setTimeout(() => {
    console.log(1);
    arr.push('setTimeout');
  }, 0);

  setImmediate(() => {
    console.log(2);
    arr.push('setImmediate');
  });

  new Promise((resolve, reject) => {
    resolve('Promise');
  }).then((v) => {
    console.log(3);
    arr.push(v);
  });

  process.nextTick(() => {
    console.log(4);
    arr.push('nextTick');
  });
};

// f2();
setTimeout(f2, 0);

setTimeout(() => {
  console.log(arr);
}, 1000);
