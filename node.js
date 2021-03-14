// event module

const events = require("events");

let ev = new events.EventEmmitter();

ev.on('my_event',function(data){
    console.log("Event :",data);
})

ev.emit('my_event','call emit() method to fire my_event');