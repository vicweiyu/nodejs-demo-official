let timerID1;
let counter1 = 0;

const f1 = () => {
  return setInterval(() => {
    console.log('f1');
    counter1++;

    if (counter1 >= 10) {
      clearInterval(timerID1);
    }
  }, 1000);
};

// timerID1 = f1();

let timerID2;
let counter2 = 0;

const f2 = (func) => {
  func();
  counter2++;

  timerID2 = setTimeout(() => {
    f2(func);
  }, 1000);
  if (counter2 >= 10) {
    clearTimeout(timerID2);
  }
};

f2(() => {
  console.log('f2');
});
