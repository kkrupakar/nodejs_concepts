const waitTime = 4000;
console.log(`expected downlolad time ${waitTime / 1000} second`);

setTimeout(() => {
    console.log(`\nDone!`);
    clearInterval(interval);
}, waitTime);

const waitInterval = 100;
let currentTime = 0;

const incTime = () =>{
    currentTime += waitInterval;
    let p = Math.floor((currentTime/waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Downloading..... ${p}%`);
}

const interval = setInterval(incTime,waitInterval);