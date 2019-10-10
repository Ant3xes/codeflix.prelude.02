const first = require('./ex01')
const initial = require('./ex02')
const last = require('./ex03')
const rest = require('./ex04')
const without = require('./ex06')
const keys = require('./ex12')
const values = require('./ex13')
const pairs = require('./ex14')
const invert = require('./ex15')

console.log('First');
console.log(first([76,51,'aie'], 2))
console.log(first([76,51,'aie',]))
console.log("end \n")

console.log('Initial');
console.log(initial([10,51,'aie'], 2))
console.log(initial([76,51,'aie']))
console.log("end \n")

console.log('last');
console.log(last([10,51,'aie'], 2))
console.log(last([76,51,'aie']))
console.log("end \n")

console.log('rest');
console.log(rest([10,51,'aie'], 2))
console.log(rest([76,51,'aie']))
console.log("end \n")

console.log('without')
console.log(without([5, 2, 3, 1, 2, 0, 1], 0, 1))
console.log("end \n")

console.log('keys')
console.log(keys({one:1, two:2, three:3}))
console.log("end \n")

console.log('values')
console.log(values({one:1, two:2, three:3}))
console.log("end \n")

console.log('pairs')
console.log(pairs({one:1, two:2, three:3}))
console.log("end \n")

console.log('invert')
console.log(invert({one:"Mose", two:"Louis", three:"Jerome"}))
console.log("end \n")

console.log('pick')
console.log(pick({name: "Moe", age: 50, userId: 1337}, 'name', 'age'))
console.log(pick({name: "Moe", age: 50, userId: 1337}, function(value, key, object){ return _.isNumber(value)}))
console.log("end \n")
