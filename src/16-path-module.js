const path = require('path');

console.log(`path.sep: ${path.sep}, path.delimiter: ${path.delimiter}`);

const filePath = 'public/text.txt';

console.log(path.basename(filePath));
console.log(path.basename(filePath, '.txt'));
console.log(path.basename(filePath, path.extname(filePath)));

console.log(path.dirname(filePath));

console.log(path.isAbsolute(filePath));
console.log(path.isAbsolute('/etc/t.txt'));

console.log(path.join('public', 'tmp', '1.txt'));

console.log(path.normalize('public/tmp/../temp.log'));

console.log(path.parse(filePath));

console.log(path.relative('public/temp', 'public/temp/data/t.json'));
console.log(path.relative('public/temp1/1.json', 'public/temp2/2.json'));

console.log(path.resolve('t.json'));
console.log(path.resolve('tmp', 't.json'));
console.log(path.resolve('/etc', 't.json'));
