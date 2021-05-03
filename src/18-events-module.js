const EventEmitter = require('events');

const myEE = new EventEmitter();

const f1 = () => {
  console.log('f1');
};

const f2 = () => {
  console.log('f2');
};

const f3 = () => {
  console.log('f3');
};

const f4 = () => {
  console.log('f4');
};

myEE.on('fire', f1);
myEE.on('fire', f2);
myEE.prependListener('fire', f4);
myEE.prependListener('fire', f3);

myEE.emit('fire');

console.log(myEE.eventNames());
console.log(myEE.getMaxListeners());
console.log(myEE.listenerCount('fire'), myEE.listenerCount('trigger'));
console.log(myEE.listeners('fire'));
// myEE.removeListener('fire', f2);
myEE.off('fire', f2);
console.log(myEE.listenerCount('fire'));
myEE.emit('fire');
