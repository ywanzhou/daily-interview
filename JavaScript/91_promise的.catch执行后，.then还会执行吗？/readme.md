> 日期：2022/04/08
分类：JavaScript、ES6
题目：promise的.catch执行后，.then还会执行吗？

会被执行；

实际上，.catch的内部就是调用的.then，只不过第一个参数传递的为null，而then会返回一个promise，所以.then还是会被执行的。

