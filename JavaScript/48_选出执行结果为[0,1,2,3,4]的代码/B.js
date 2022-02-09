;(function () {
  var result = new Array()
  for (var i = 0; i < 5; i++) {
    result[i] = (function (num) {
      return function () {
        return num
      }
    })(i)
  }
  return result
})()
// 方法未调用
