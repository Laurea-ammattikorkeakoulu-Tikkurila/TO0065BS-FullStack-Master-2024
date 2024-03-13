// require the events module
const EventEmitter = require('node:events');

// create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// register a listener for the start event
eventEmitter.on('start', () => {
    console.log('started');
});
// emit the start event
eventEmitter.emit('start');

