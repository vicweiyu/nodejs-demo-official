const path = require('path');
const fs = require('fs');

const dirName = 'public';
const fileName = 'text.txt';
const filePath = path.join(dirName, fileName);

fs.readFile(filePath, 'UTF-8', (err, data) => {
  console.log('in readFile');
  if (err !== null) {
    console.log(err);
    return;
  }

  console.log(data);
});

console.log(1);

try {
  let data = fs.readFileSync(filePath, 'UTF-8');
  console.log(data);
} catch (e) {
  console.log(e);
}

console.log(2);
