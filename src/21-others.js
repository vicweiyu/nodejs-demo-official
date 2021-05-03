console.log(process.env.NODE_ENV);

process.on('uncaughtException', (err) => {
  console.error('in uncaughtException\n', err);
  process.exit(1); // 强制性的（根据 Node.js 文档）
});

// console.log(s);

require('util').inspect.defaultOptions.depth = null;
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
