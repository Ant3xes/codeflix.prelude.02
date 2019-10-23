module.exports = function pluck(list, propertyName) {
    return list.map(o => o[propertyName]);
 }