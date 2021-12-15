const fs = require('fs');

console.log(1);

fs.open('public/text.txt', 'r', (err, fd) => {
  console.log('in open');
  console.log(`err: ${err}, fd: ${fd}`);
});

console.log(2);

try {
  const fdOuter = fs.openSync('public/text.txt', 'r');
  console.log(`fdOuter: ${fdOuter}`);
} catch (e) {
  console.log(e);
}

console.log(3);

fs.stat('public/text.txt', (err, stats) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('in stat');
  console.log(stats.isFile(), stats.isDirectory(), stats.isSymbolicLink(), stats.size);
});

console.log(4);

try {
  const stats = fs.statSync('public/text.txt');
  console.log(stats.isFile(), stats.isDirectory(), stats.isSymbolicLink(), stats.size);
} catch (e) {
  console.log(e);
}

console.log(5);
