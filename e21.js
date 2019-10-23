module.exports = function map(list,  iterateCb) {
   return list.map(x => x * iterateCb);
}