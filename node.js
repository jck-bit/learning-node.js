//buffer
const buf = Buffer.from("Hey")

console.log(buf.toString());


console.log(buf[0]);
console.log(buf[1]);
console.log(buf[2]);

buf[1] = 111 //o
console.log(buf.toString());