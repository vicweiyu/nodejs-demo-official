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

const nt3 = () => {
  console.log('nt 3');
};

const nt4 = () => {
  console.log('nt 4');
};

const f = () => {
  foo();

  setImmediate(() => {
    console.log('setImmediate');
  });

  setTimeout(() => {
    console.log('setTimeout'); // Message Queue, macro-task
  }, 0);

  new Promise((resolve, reject) => {
    console.log('in Promise 1');
    resolve('after bar but before setTimeout - a'); // Job Queue, micro-task
    console.log('in Promise 2');
  }).then(console.log);

  new Promise((resolve, reject) => {
    console.log('in Promise 3');
    resolve('after bar but before setTimeout - b'); // Job Queue, micro-task
    console.log('in Promise 4');
  }).then(console.log);

  process.nextTick(nt1); // Job Queue, micro-task
  process.nextTick(nt2); // Job Queue, micro-task

  bar();
};

// process.nextTick(nt3); // Job Queue, micro-task
// process.nextTick(nt4); // Job Queue, micro-task

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
