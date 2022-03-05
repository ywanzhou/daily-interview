> 日期：2022/03/05
分类：JavaScript、代码分析题
题目：分析下面这段代码，并说出输出结果

```JavaScript
var a = 100;
function a() {
  var a = 200;
  console.log(a)
}
a();
```

这段代码会抛出异常，错误信息是a is not a function，也就是a不是一个函数。

这是因为定义a函数会被提升到顶层，a又被重新赋值为变量，所以运行会报错。

