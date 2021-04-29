const fs = require('fs');

/*
console.log(1);

fs.open('public/text.txt', 'r', (err, fd) => {
  console.log('in open');
  console.log(`fd: ${fd}`);
});

console.log(2);

fdOuter = fs.openSync('public/text.txt', 'r');

console.log(`fdOuter: ${fdOuter}`);

console.log(3);
*/

fs.stat('public/text.txt', (err, stat) => {
  if (err !== null) {
    console.log(err);
  }

  console.log('in stat');
  console.log(stat.isFile(), stat.isDirectory(), stat.isSymbolicLink(), stat.size);
});

console.log(4);

const stat = fs.statSync('public/text.txt');
console.log(stat.isFile(), stat.isDirectory(), stat.isSymbolicLink(), stat.size);

console.log(5);
