const events = require('node:events');

let emitter = new events.EventEmitter();

emitter.on('custom-event',(message,user) => {
    console.log(`${user}: ${message}`);
});

emitter.emit('custom-event','Dummy Event..!','Krupakar')

process.stdin.on('data',(data) => {
    const input = data.toString().trim();    
    if(input === 'exit'){
        emitter.emit('custom-event','Good Bye!','process');
        process.exit();
    }
    emitter.emit('custom-event',input,'terminal');
});