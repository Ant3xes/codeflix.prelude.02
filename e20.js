module.exports = function sample(list, n = 1) {
    return list[Math.floor(Math.random() * list.length)], n;
  }
  