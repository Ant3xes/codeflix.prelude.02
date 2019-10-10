const first = require('./ex01')
const initial = require('./ex02')
const last = require('./ex03')

console.log('First');
console.log(first([76,51,'aie'], 2))
console.log(first([76,51,'aie',]))
console.log("end \n")

console.log('Initial');
console.log(initial([10,51,'aie'], 2))
console.log(initial([76,51,'aie',]))
console.log("end \n")

console.log('last');
console.log(last([10,51,'aie'], 2))
console.log(last([76,51,'aie',]))
console.log("end \n")