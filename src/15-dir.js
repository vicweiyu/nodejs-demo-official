const path = require('path');
const fs = require('fs');
const fsExtra = require('fs-extra');

const dirName = 'public';

if (fs.existsSync(dirName) && !fs.existsSync(path.join(dirName, 'tmp'))) {
  fs.mkdirSync(path.join(dirName, 'tmp'));
} else {
  console.log('tmp is existed under public folder');
}

let arr = fs.readdirSync(dirName);
// console.log(arr);

arr.forEach((item) => {
  const t = path.join(dirName, item);
  console.log(fs.statSync(t).isFile() ? 'File:' : 'Dir :', path.resolve(t));
});

setTimeout(() => {
  try {
    fs.renameSync(path.join(dirName, 'tmp'), path.join(dirName, 'store'));
  } catch (e) {
    console.log(e);
  }
}, 3 * 1000);

setTimeout(() => {
  /*
  fsExtra.remove(path.join(dirName, 'store'), (err) => {
    console.log(err);
  });
  */

  fsExtra
    .remove(path.join(dirName, 'store'))
    .then(() => {
      console.log(`Folder 'store' has been deleted`);
    })
    .catch((e) => {
      console.log(e);
    });
}, 5 * 1000);
