const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('start', (p, ...others) => {
  console.log(`on start - p: ${p}, others:`, ...others);
});

let timerID;
let counter = 0;
const f = () => {
  timerID = setTimeout(f, 1000);

  eventEmitter.emit('start', 'Hello', 'TS', 'NodeJS', 'React');
  counter++;
  if (counter >= 5) {
    clearTimeout(timerID);
  }
};

f();
