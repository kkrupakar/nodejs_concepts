const path = require('node:path');
const util = require('node:util');

console.log(path.basename(__filename));
console.log(path.join(__dirname,'www','files','uploads'));
const log = util.debuglog(path.basename(__filename));

log(`${path.basename(__filename)} ${Date.now()}`);