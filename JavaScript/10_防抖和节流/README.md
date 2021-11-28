> 日期：2021/11/28
分类：JavaScript
题目：防抖和节流

防抖和节流都是性能优化的方法。

### 防抖

防抖的原理就是事件触发时，不要马上执行动作，而是设定一个延迟时间，比如500ms，在延迟时间内，再次触发事件，则重新计时。

适用场景：搜索联想，保证在输入完毕后才发送请求

```JavaScript
// 防抖
function debounce(func, wait = 300) {
  let timeOut
  return function () {
    const context = this,
      args = arguments
    clearTimeout(timeOut)
    timeOut = setTimeout(function () {
      func.apply(context, args)
    }, wait)
  }
}
```

测试这个函数的代码如下：

```JavaScript
// 测试防抖函数
function fun() {
  console.log('一碗周')
}
let func = debounce(fun, 500)
let count = 0
let t = setInterval(() => {
  console.log(count)
  func()
  if (++count === 3) {
    clearInterval(t)
    // count = 0
  }
}, 510) // 执行三次函数
```

如果将上面代码中的`510`修改为小于`500`的话，这个`func`函数只会执行一次。

如果我们希望事件触发后马上就执行，等一段时间后才可以重新触发执行。可以修改代码如下

```JavaScript
/**
 * @description: 防抖优化版
 * @param {*} f 需要防抖的函数
 * @param {*} wait 延迟时间
 * @param {*} immediate 是否需要立即执行
 * @returns {*} 经过防抖处理的函数
 */
function debounce(f, wait = 300, immediate = false) {
  let timeOut
  return function () {
    const context = this,
      args = arguments
    if (timeOut) clearTimeout(timeOut)
    if (immediate) {
      const callNow = !timeOut
      timeOut = setTimeout(function () {
        timeOut = null
      }, wait)
      console.log(callNow)
      if (callNow) f.apply(context, args)
    } else {
      timeOut = setTimeout(function () {
        f.apply(context, args)
      }, wait)
    }
  }
}
```

### 节流

节流的原理就是在事件触发后，规定在一个单位时间内，只能执行一次要执行的代码，如果在这个单位时间内触发多次函数，这多次触发只有一次生效。

适用场景：滚动事件、上拉加载更多等一些高频触发的操作都是需要通过节流进行控制的。另外对于用户频繁点击登录按钮的情况，其实使用防抖和节流都是可以的。

实现代码如下：

```JavaScript
/**
 * @description: 节流函数
 * @param {*} f 需要节流处理的函数
 * @param {*} wait 多长时间允许执行一次，单位毫秒
 * @returns {*} 节流后处理的函数
 */
function throttle(f, wait) {
  let timeOut
  return function () {
    const context = this
    const args = arguments
    if (!timeOut) {
      timeOut = setTimeout(function () {
        timeOut = null
        f.apply(context, args)
      }, wait)
    }
  }
}

```

### 防抖和节流的区别

防抖是最后一次操作才会生效而节流是多长时间内生效一次。

