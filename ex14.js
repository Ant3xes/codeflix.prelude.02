module.exports= function pairs (obj) {
    let arr = []
    for (const [key, value] of Object.entries(obj)){
        arr.push(key, value)   
    }
    return arr
}
