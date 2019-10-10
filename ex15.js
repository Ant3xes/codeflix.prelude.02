module.exports = function invert (obj) {
        let newObj = {}
        let array = Object.entries(obj)
        for (const elt of array){
            const [key, value] = elt
            newObj[value] = key
    }
    return newObj
}