module.exports = function without(array, ...values) {
    let array1 = []
    for (const v of array) {
        if (!values.includes(v)) {
            array1.push(v)
        }
    }
    return array1
}