// event module

const events = require("events");

let ev = new events.EventEmmitter();

ev.once('eventonce',() =>console.log("eventones once fired"))

ev.emit('eventonce');