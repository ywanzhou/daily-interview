> 日期：2022/02/09
分类：JavaScript
题目：选出执行结果为[0,1,2,3,4]的代码

`A.js`

```JavaScript
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

```

`B.js`

```JavaScript
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

```

`C.js`

```JavaScript
;(function () {
  var result = new Array()
  for (let i = 0; i < 5; i++) {
    result[i] = (function () {
      return i
    })(i)
  }
  return result
})()

```

`D.js`

```JavaScript
;(function () {
  var result = new Array()
  for (var i = 0; i < 5; i++) {
    result[i] = (function () {
      return i
    })(i)
  }
  return result
})()

```

输出结果为[0, 1, 2, 3, 4]的只有C和D，因为A和B都存在一个问题，就是为其赋值的都是一个函数，导致数组中的每一项都是一个函数。