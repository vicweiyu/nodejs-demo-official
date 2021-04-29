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

let arr = [];

const f = () => {
  console.log('f');

  setImmediate(() => {
    console.log('setImmediate');
  });

  setTimeout(foo, 0);

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

f();

console.log('********************');

const f2 = () => {
  setTimeout(() => {
    arr.push('setTimeout');
  }, 0);
  setImmediate(() => {
    arr.push('setImmediate');
  });
};

setTimeout(f2, 0);

setTimeout(() => {
  console.log(arr);
}, 100);
