> 日期：2022/05/26
分类：JavaScript、代码分析
题目：下面这段代码的运行结果是什么？

```JavaScript
if (!'a' in window) {
  var a = 1
}
alert(a)

```

这段代码最终弹出的值为undefined，因为使用var关键字定义变量并不存在块级作用域，所以上面那段代码的执行顺序应该是下面这个样子：

```JavaScript
var a
if (!'a' in window) {
  a = 1
}
alert(a)

```

而in运算符的优先级小于!，所以条件表达式中的的为false in window，最终结果为false，所以赋值语句并不会执行，所以最终结果为undefined。

