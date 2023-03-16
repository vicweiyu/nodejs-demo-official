const path = require('path');
const fs = require('fs');

const dirName = 'public';
const fileName = 'text.txt';
const filePath = path.join(dirName, fileName);

/*
fs.writeFile(filePath, 'New Content 1', (err) => {
  if (err) {
    console.log(err);
  }
});
*/

fs.writeFile(filePath, 'JS', { flag: 'r+' }, (err) => {
  if (err) {
    console.log(err);
  }
});

/*
fs.writeFile(filePath, 'New Content 2', { flag: 'a+' }, (err) => {
  if (err) {
    console.log(err);
  }
});
*/

/*
try {
  fs.appendFileSync(filePath, 'CSM');
} catch (e) {
  console.log(e);
}
*/
