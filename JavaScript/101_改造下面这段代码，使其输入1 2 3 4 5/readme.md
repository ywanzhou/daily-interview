> 日期：2022/04/21
分类：JavaScript、编程题
题目：改造下面这段代码，使其输入1 2 3 4 5

```JavaScript
for (var i = 1; i <= 5; i++){
  setTimeout(function timer() {
    console.log(i)
  }， 0)
}
```

1. 使用let关键字

```JavaScript
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, 0)
}

```
1. 使用setTimeout的第三个参数

```JavaScript
for (var i = 1; i <= 5; i++) {
  setTimeout(
    function timer(j) {
      console.log(j)
    },
    0,
    i
  )
}

```
1. 使用自调函数，形成函数作用域

```JavaScript
for (var i = 1; i <= 5; i++) {
  ;(function (j) {
    setTimeout(function timer() {
      console.log(j)
    }, 0)
  })(i)
}

```

