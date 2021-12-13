const EventEmitter = require('events');

/*
const em = new EventEmitter();
em.on('tigger', (p, ...others) => {
  console.log(`on tigger: p:${p}, others:${others}`);
});

let count = 0;
const timerID = setInterval(() => {
  em.emit('tigger', 'Hello', 'NodeJS', 'Express', 'Koa', 'NestJS');
  count++;
  if (count >= 5) {
    clearInterval(timerID);
  }
}, 1000);
*/

console.log('********************');

const em2 = new EventEmitter();
em2.once('tiggerOnce', (p) => {
  console.log('once', p);
});

let count2 = 0;
const timerID2 = setInterval(() => {
  console.log('Interval', count2);
  em2.emit('tiggerOnce', count2);
  count2++;
  if (count2 >= 5) {
    clearInterval(timerID2);
  }
}, 1000);
