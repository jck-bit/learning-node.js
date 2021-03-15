/*
// event module

const events = require("events");

let ev = new events.EventEmmitter();

ev.once('eventOnce',() => console.log("events once fired"));

ev.emit('eventOnce');
*/
//streams 

const http = require("http");
const fs = require("fs")

const server = http.createServer(function(req,res){
    const stream = fs.createReadStream('test.json');
    stream.pipe(res);
  
})
server.listen(3000,() =>(console.log("application started on port 3000")));