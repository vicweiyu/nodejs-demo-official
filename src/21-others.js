// npx cross-env NODE_ENV=production node src/21-others.js
console.log(process.env.NODE_ENV);

process.on('uncaughtException', (err) => {
  console.error('in uncaughtException\n', err);
  process.exit(1);
});

// console.log(s);

const obj = {
  name: 'Victor',
  skill: {
    client: ['TS', 'React', 'PWA'],
    server: ['NodeJS', 'Java'],
    magt: {
      scm: true,
      pmp: {
        now: false,
        future: true,
      },
    },
  },
};
console.log(obj);

console.log('********************');

console.log(JSON.stringify(obj, null, 2));

console.log('********************');

require('util').inspect.defaultOptions.depth = null;

console.log(obj);
