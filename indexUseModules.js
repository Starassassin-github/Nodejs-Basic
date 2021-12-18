const util = require('./modules/mymodules.js')
const now = require('./modules/mymodules').getCurrentTime
const plus = require('./modules/mymodules').add
const number = 5000000

console.log(now());
console.log(util.getCurrentTime());
console.log(util.add(50,100));
console.log(plus(50,100));
console.log(util.formatNumber(number));