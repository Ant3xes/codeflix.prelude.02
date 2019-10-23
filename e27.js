module.exports = function isNull(object) {
   if (object === null && typeof object === "object")
   {
       return true
   }
   else 
   {
       return false
   }
  }