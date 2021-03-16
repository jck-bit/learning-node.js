const buf = Buffer.alloc(4)

buf.write('Hey!')

console.log(buf.toString())

console.log(buf[0]);
console.log(buf[1]);
console.log(buf[2]);

buf[1] = 111 //o

console.log(buf.toString());