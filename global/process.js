console.log(process.argv);

function grab(flag){
    let indexAfterFlag = process.argv.indexOf(flag)+1;
    return process.argv[indexAfterFlag];
}

let greetings = grab('--greeting');
let user = grab('--user');

console.log('===================');
console.log(greetings,user);
