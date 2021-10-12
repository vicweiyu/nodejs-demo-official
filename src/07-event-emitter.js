const EventEmitter = require('events');
const em = new EventEmitter();
em.on('tigger', (p, ...others) => {
  console.log(`on tigger: p:${p}, others:${others}`);
});

let count = 0;
const timerID = setInterval(() => {
  em.emit('tigger', 'Hello', 'NodeJS', 'Express', 'Koa', 'NestJS');
  count++;
  if (count >= 5) {
    clearTimeout(timerID);
  }
}, 1000);
