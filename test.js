//ex09
var arr1 = [1, 2, 3, 5]
var arr2 = [1, 2, 4, 8]

let difference = arr1.filter(x => !arr2.includes(x));
let intersection = arr1.filter(x => arr2.includes(x));

console.log(difference);
console.log(intersection);
//

