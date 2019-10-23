module.exports = function flatten(array, shallow) {
    if(shallow) {
        return [].concat(...array)
    } else {
        return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
    }
