const path = require('node:path');

console.log('Directory :', __dirname);
global.console.log('Filename :',__filename);

console.log(`The filename is => ${path.basename(__filename)}`);

Object.keys(global).forEach( entry => {
    console.log(`Entry type : ${typeof(global[entry])} value : ${entry}`);
});