;(function () {
  var result = new Array()
  for (var i = 0; i < 5; i++) {
    result[i] = function () {
      return i
    }
  }
  return result
})()
// 原因 方法未调用
