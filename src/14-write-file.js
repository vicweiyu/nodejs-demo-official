const path = require('path');
const fs = require('fs');

const dirName = 'public';
const fileName = 'text.txt';
const filePath = path.join(dirName, fileName);

/*
fs.writeFile(filePath, 'New Content 1', (err) => {
  console.log(err);
});
*/

/*
fs.writeFile(filePath, 'New Content 2', { flag: 'w+' }, (err) => {
  console.log(err);
});
*/

/*
try {
  fs.writeFileSync(filePath, 'New Content 3', { flag: 'a+' });
} catch (e) {
  console.log(e);
}
*/

fs.appendFile(filePath, 'CSM', (err) => {
  console.log(err);
});
