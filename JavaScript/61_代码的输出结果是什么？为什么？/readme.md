> 日期：2022/03/01
分类：JavaScript、代码题
题目：下图中的代码输出结果是什么？为什么？

```JavaScript
var a;
alert(typeof a);
alert(b);
b = 10;
alert(typeof b)
```

第一个alert的结果为'undefined'

第二个alert报错

第三个alert的结果为'number'

声明变量未初始化的值为'undefined'；第二个alert中，使用了未声明的变量，所以直接报错；第三个alert中，b是直接初始化为10，所以为'number'