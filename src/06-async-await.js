const doSthAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolve in Promise');
    }, 3 * 1000);
  });
};

const doSth = async () => {
  console.log('a');
  console.log(await doSthAsync());
  console.log('b');
};

console.log(1);
doSth();
console.log(2);

console.log('********************');

const f = async () => 'Hello';
f().then(console.log);
