> 日期：2022/01/30
分类：JavaScript
题目：{}和[]的valueOf和toString的结果是什么？

- Object原型上存在一个valueOf方法，用于获取对象的原始值；
- toString方法也是存在于Object原型上，会返回对象的字符串表示形式；而Array原型的toString会返回一个字符串，包含数组中的元素。
- 所以说{}.valueOf()的结果为{}，{}.toString()的结果为'[object Object]'；
- [].valueOf()的结果为[]，[].toString()的结果为''。

