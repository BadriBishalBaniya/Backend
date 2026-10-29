const EventEmitter = require('node:events');  //inbuit packages

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please turn off the Motor!');
  setTimeout(() => {
    console.log("Please turn off the Motor! Its a gentle reminder")
  }, 3000);
});
console.log("The script is running")
myEmitter.emit('WaterFull');
console.log("The script is still running")