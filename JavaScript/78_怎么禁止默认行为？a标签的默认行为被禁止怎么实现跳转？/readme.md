> 日期：2022/03/22
分类：JavaScript、DOM
题目：怎么禁止默认行为？a标签的默认行为被禁止怎么实现跳转？

禁止默认行为可以通过event.preventDefault()方法禁止；禁止默认行为后可以通过location.href、window.open()或者History API实现跳转。

关于location.href和window.open()的区别可以参考[https://juejin.cn/post/7020425677237125127](https://juejin.cn/post/7020425677237125127)

