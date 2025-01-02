let count = 0;

const inc = () => ++count;
const dec = () => --count;

const get = () => count;

module.exports = {
    anything: true,
    who: 'Krupakar',
    count,
    inc,
    dec,
    get
};