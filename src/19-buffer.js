const buf = Buffer.from('NodeJS');

console.log('Buffer Length: ' + buf.length);

buf.forEach((item) => {
  console.log(item);
});

console.log(buf.slice(0, 4).toString());

buf[0] = 110;
console.log(buf.toString());

console.log('********************');

const buf2 = Buffer.alloc(2);
buf2.write('TS');
console.log(buf2.toString());

buf2.forEach((item) => {
  console.log(item);
});

buf2[0] = 74;
console.log(buf2.toString());

console.log('********************');

const bufCopy = Buffer.alloc(4);
/*
  copy(targetBuffer: Uint8Array, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;
*/
buf.copy(bufCopy, 0, 0, 4);
console.log(bufCopy.toString());
