> 日期：2022/03/04
分类：JavaScript、代码分析
题目：观察下面的代码，代码会输出什么？

```JavaScript
var foo = 1;
(function () {
  console.log(foo);
  var foo = 2;
  console.log(foo);
})();

```

会输出undefined和2；自调函数从存在变量提升。

