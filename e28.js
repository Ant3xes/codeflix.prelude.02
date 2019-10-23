module.exports = function isRegExp(object) {
    if (object instanceof RegExp)
    {
        return true
    }
    else 
    {
        return false
    }
   }