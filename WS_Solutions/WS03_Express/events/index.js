// Description: This file is used to test the event emitter.
// require the logEvents module you created in previous step
const logEvents = require('./logEvents');

// require the events module    
const eventEmitter = require('events');
// create a class that extends the event emitter class
class MyEmitter extends eventEmitter { }

// initialize the event emitter
const myEmitter = new MyEmitter();

// add listener for the log event and call the logEvents function 
myEmitter.on('log', (msg) => logEvents(msg));
// set a timeout to emit the log event
setTimeout(() => {

    // emit the log event
    myEmitter.emit('log', 'This is a test message');
}, 1000);

