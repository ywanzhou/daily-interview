> 日期：2022/04/19
分类：JavaScript、编程题
题目：怎么使用setTimeout实现setInterval？

使用setInterval存在一个问题，就是执行时间会存在偏差，因为setInterval的是每隔一段时间将函数添加到事件队列中，如果当前执行时间过长，就会导致多个计时器加入队列，最终导致时间出现偏差。

```JavaScript
const mySetInterval = (callback, wait) => {
  let timer = {
    flag: true,
    clear() {
      this.flag = false
    },
  }
  ;(function f() {
    callback()
    timer.flag && setTimeout(f, wait)
  })()
  return timer
}

```

