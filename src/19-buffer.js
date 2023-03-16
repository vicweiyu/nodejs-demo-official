const buf = Buffer.from('NodeJS');

console.log('Buffer Length: ' + buf.length);

console.log(buf[0], buf[1], buf[2]);
console.log(buf.toString());
console.log(buf.subarray(0, 4).toString());

for (let item of buf) {
  console.log(item);
}

console.log('********************');

const buf2 = Buffer.alloc(2);
const l = buf2.write('TS');
console.log(buf2.toString(), `Length: ${l}`);

buf2[0] = 74;
console.log(buf2.toString());

console.log('********************');

/*
  copy(targetBuffer: Uint8Array, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;
*/
const copy1 = Buffer.alloc(6);
buf.copy(copy1);
console.log(copy1.toString());

const copy2 = Buffer.alloc(4);
buf.copy(copy2, 0, 0, 4);
console.log(copy2.toString());
