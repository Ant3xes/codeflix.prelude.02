// const first = require('./ex01')
// const initial = require('./ex02')
// const last = require('./ex03')
// const rest = require('./ex04')
// const without = require('./ex06')
// const union = require('./ex07x')
// const intersection = require('./ex08')
// const difference = require('./ex09')
// const indexOf = require('./ex10')
// const lastIndexOf = require('./ex11')
// const keys = require('./ex12')
// const values = require('./ex13')
// const pairs = require('./ex14')
// const invert = require('./ex15')
// const pick = require('./ex16')
// const omit = require('./ex17x')
const has = require('./ex18')
const size = require('./ex19')
const sample = require('./ex20x')
// const map = require('./ex21x')
const isArray = require('./ex23')
const isObject = require('./ex24')
// const isMatch = require('./ex25x')
// const isUndifined = require('./ex26')
const isNull = require('./e27')
const isRegExp = require('./e28')
const isFunction = require('./e29')


// console.log('First');
// console.log(first([76,51,'aie',]))
// console.log("end \n")

// console.log('Initial');
// console.log(initial([76,51,'aie']))
// console.log("end \n")

// console.log('last');
// console.log(last([76,51,'aie']))
// console.log("end \n")

// console.log('rest');
// console.log(rest([76,51,'aie']))
// console.log("end \n")

// console.log('without')
// console.log(without([5, 2, 3, 1, 2, 0, 1], 0, 1))
// console.log("end \n")

// console.log('union')
// console.log(union([1, 2, 3], [101, 2, 1, 10], [2, 1]))
// console.log("end \n")

// console.log('intersection')
// console.log(intersection([1, 2, 3], [101, 2, 1, 10], [1, 2]))
// console.log("end \n")

// console.log('difference')
// console.log(difference([1, 2, 3, 4, 5], [5, 2, 10]))
// console.log("end \n")

// console.log('indexOf')
// console.log(indexOf([1, 2, 3], 2))
// console.log("end \n")

// console.log('lastIndexOf')
// console.log(lastIndexOf([1, 2, 3, 1, 2, 3], 2))
// console.log("end \n")

// console.log('keys')
// console.log(keys({one:1, two:2, three:3}))
// console.log("end \n")

// console.log('values')
// console.log(values({one:1, two:2, three:3}))
// console.log("end \n")

// console.log('pairs')
// console.log(pairs({one:1, two:2, three:3}))
// console.log("end \n")

// console.log('invert')
// console.log(invert({one:"Mose", two:"Louis", three:"Jerome"}))
// console.log("end \n")

// console.log('pick')
// console.log(pick({name: "Moe", age: 50, userId: 1337}, 'name', 'age'))
// console.log(pick({name: "Moe", age: 50, userId: 1337}, function(value, key, object){ return Number.isInteger(value)}))
// console.log("end \n")

// console.log('pick')
// console.log(pick({name: "Moe", age: 50, userId: 1337}, 'name', 'age'))
// console.log(pick({name: "Moe", age: 50, userId: 1337}, function(value, key, object){ return Number.isInteger(value)}))
// console.log("end \n")

console.log('has')
console.log(has({a:"1", b:"2", c:"3"}, "b"))
console.log("end \n")

console.log('size')
console.log(size([1, 2, 3, 4, 5]))
console.log(size({one:"1", two:"2", three:"3"}))
console.log("end \n")

console.log('sample')
console.log(sample([1, 2, 3, 4, 5, 6]))
console.log(sample([1, 2, 3, 4, 5, 6], 3))
console.log("end \n")

// console.log('map')
// console.log(map([1, 2, 3], function(num){ return num * 3;}))
// console.log(map({one:"1", two:"2", three:"3"}, function(num, key){ return num * 3; }))
// console.log("end \n")

// console.log('pluck')
// const stooges = pluck([{name: 'moe', age:40}, {name: 'larry', age:50}, {name:'curly', age: 60}])
// pluck(stooges, 'name')
// console.log("end \n")

console.log('isArray')
console.log(isArray([1, 2, 3]))
console.log("end \n")

console.log('isObject')
console.log(isObject({}))
console.log(isObject(1))
console.log("end \n")

// console.log('isMatch')
// let stooge = {name : 'moe', age: 32}
// console.log(isMatch(stooge, {age: 32}))
// console.log("end \n")

// console.log('isUndifined')
// console.log(isUndifined(efrei))
// console.log("end \n")

console.log('isNull')
console.log(isNull(null))
console.log(isNull(undefined))
console.log("end \n")

console.log('isRegExp')
console.log(isRegExp(/moe/))
console.log("end \n")

console.log('isFunction')
console.log(isFunction(/moe/))
console.log("end \n")