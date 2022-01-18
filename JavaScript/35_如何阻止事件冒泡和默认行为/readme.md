> 日期：2022/01/18
分类：JavaScript、DOM
题目：如何阻止事件冒泡和默认行为

- 使用event.stopPropagation()方法可以阻止事件的默认行为，例如我们在a标签上绑定一个click事件，调用该方法后，点击a标签后，并不会进行跳转；
- 使用event.preventDefault()方法可以阻止事件冒泡；
- 为事件处理函数return false，这种方法比较暴力，既阻止了默认行为，又取消了事件冒泡。

