// node .\src\01-command-io.js --name=Victor --skill=NodeJS

const fullArgs = process.argv;
fullArgs.forEach((val, index) => {
  console.log(`Index:${index}, Value:${val}`);
});

const args1 = process.argv.slice(2);
console.log(args1);

const args2 = require('minimist')(process.argv.slice(2));
console.log(args2['name'], args2['skill']);

// console.log('%o', Number);

const chalk = require('chalk');
console.log(chalk.yellow('Hello World!'));

/*
const ProgressBar = require('progress');
const bar = new ProgressBar(':bar', { total: 10 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question('Who is hided in your heart? ', (name) => {
  console.log(name);
  readline.close();
});

const lib = require('./02-exports');
console.log(lib.car);
lib.f();
