const downloadTime = Math.floor(Math.random()*10000);
console.log(`Expected download Time ${downloadTime}`);

const waitInterval = downloadTime/10;
let currentStatus = 0;
setTimeout(()=>{
    process.stdout.write('\nCompleted successfully!');
    clearInterval(interval);
},(downloadTime+waitInterval));

const statusIncrementor = () => {    
    currentStatus += waitInterval;
    let p = Math.floor((currentStatus/ waitInterval));
    //console.log(p);
    let result = p > 10 ? '[##########]':`[${'#'.repeat(p).concat('_'.repeat(10 - p))}]`;
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Downloading... ${result}`);
}

const interval = setInterval(statusIncrementor,waitInterval);