// node src/01-command-io.js --name=Victor --skill=NodeJS

const fullArgv = process.argv;
fullArgv.forEach((val, index) => {
  console.log(`Index:${index}, Value:${val}`);
});

const argv1 = process.argv.slice(2);
console.log('🚀 ~ file: 01-command-io.js:9 ~ argv1:', argv1);

const argv2 = require('minimist')(process.argv.slice(2));
console.log(argv2['name'], argv2['skill']);

let obj = {
  a: 1,
  b: 2,
};
console.log(obj);
console.log('%s, %d, %i, %o', 'Hello', 1.23, 12.3, obj);

console.log('********************');

const s1 = 'NodeJS';
const s2 = 'NodeJS';
console.count(s1);
console.count(s2);

const meausreFunc = async (func) => {
  console.time(func.name);
  const result = await func();
  console.log(result);
  console.timeEnd(func.name);
};

const waitFunc = () => {
  console.log('TEST START');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('TEST END');
    }, 5 * 1000);
  });
};

meausreFunc(waitFunc);

console.log('********************');

/*
const ProgressBar = require('progress');
const percent = new ProgressBar(':percent', { total: 10 });
const intervalID = setInterval(() => {
  percent.tick();
  if (percent.complete) {
    clearInterval(intervalID);
  }
}, 200);
*/

console.log('********************');

/*
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question('Who is hided in your heart?\n', (name) => {
  console.log(name);
  readline.close();
});
*/

console.log('********************');

/*
const inquirer = require('inquirer');
const questions = [
  {
    type: 'password',
    name: 'name',
    message: `What's your name`,
  },
];
inquirer.prompt(questions).then((answers) => {
  console.log(`Hello ${answers['name']}!`);
});
*/

console.log('********************');

const lib = require('./02-exports');
console.log(lib.car);
lib.f();
