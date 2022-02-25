const path = require('path');
const fs = require('fs');
const fsExtra = require('fs-extra');

const dirName = 'public';

fs.access(dirName, (err) => {
  console.log('in access');
  if (err) {
    console.log(err);
  }
});

if (fs.existsSync(dirName) && !fs.existsSync(path.join(dirName, 'tmp'))) {
  try {
    fs.mkdirSync(path.join(dirName, 'tmp'));
  } catch (e) {
    console.log(e);
  }
} else {
  console.log('tmp is existed under public folder');
}

const arr = fs.readdirSync(dirName);
console.log(arr);
arr.forEach((item) => {
  const t = path.join(dirName, item);
  console.log(fs.statSync(t).isFile() ? 'File:' : 'Dir:', path.resolve(t));
});

setTimeout(() => {
  console.log('in rename');
  try {
    fs.renameSync(path.join(dirName, 'tmp'), path.join(dirName, 'store'));
  } catch (e) {
    console.log(e);
  }
}, 3 * 1000);

const removeDir = async (dir) => {
  try {
    console.log('Remove Dir Start');
    await fsExtra.remove(dir);
    console.log('Remove Dir End');
  } catch (e) {
    console.log(e);
  }
};

setTimeout(() => {
  /*
  fsExtra.remove(path.join(dirName, 'store'), (err) => {
    console.log('in remove');
    if (err) {
      console.log(err);
    }
  });
  */

  /*
  fsExtra
    .remove(path.join(dirName, 'store'))
    .then(() => {
      console.log(`Folder 'store' has been deleted`);
    })
    .catch((e) => {
      console.log(e);
    });
  */

  removeDir(path.join(dirName, 'store'));
}, 5 * 1000);
