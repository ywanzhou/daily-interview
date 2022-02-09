;(function () {
  var result = new Array()
  for (let i = 0; i < 5; i++) {
    result[i] = (function () {
      return i
    })(i)
  }
  return result
})()
