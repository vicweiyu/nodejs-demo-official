const path = require('path');

const dirName = 'public';
const fileName = 'text.txt';
const filePath = path.join(dirName, fileName);
console.log(filePath);
console.log(path.resolve(filePath));
console.log(path.resolve('tmp', filePath));
console.log(path.resolve('/etc', filePath));

console.log(path.normalize('/etc/public/tmp/../1.txt'));

console.log(path.basename(filePath));
console.log(path.basename(filePath, path.extname(filePath)));
console.log(path.extname(filePath));
console.log(path.dirname(filePath));
