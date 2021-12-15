const path = require('path');
const fs = require('fs');

const dirName = 'public';
const fileName = 'text.txt';
const filePath = path.join(dirName, fileName);

console.log(1);

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

console.log(2);

try {
  const data = fs.readFileSync(filePath, 'utf-8');
  console.log(data);
} catch (e) {
  console.log(e);
}

console.log(3);
