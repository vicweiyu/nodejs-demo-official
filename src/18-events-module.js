const EventEmitter = require('events');

const myEE = new EventEmitter();

const FIRE = 'fire';

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

const f5 = () => {
  console.log('f5');
};

myEE.on(FIRE, f1);
myEE.addListener(FIRE, f2);
myEE.prependListener(FIRE, f3);
myEE.prependListener(FIRE, f4);
myEE.prependOnceListener(FIRE, f5);

myEE.emit(FIRE);

console.log(myEE.eventNames());

console.log(myEE.getMaxListeners());
myEE.setMaxListeners(12);
console.log(myEE.getMaxListeners());

console.log(myEE.listenerCount(FIRE), myEE.listenerCount('trigger'));
console.log(myEE.listeners(FIRE));
myEE.off(FIRE, f3);
myEE.removeListener(FIRE, f4);
console.log(myEE.listeners(FIRE));

myEE.emit(FIRE);

myEE.removeAllListeners();
console.log(myEE.listeners(FIRE));
myEE.emit(FIRE);
