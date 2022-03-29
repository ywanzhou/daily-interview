> 日期：2022/03/29
分类：JavaScript
题目：函数中的arguments是数组吗？若不是，如何将它转化为真正的数组？

函数中的arguments不是一个数组，而是一个类数组对象；将类数组对象转换为数组可以通过下面这三种方式：

1. 使用展开运算符，例如：[...arguments]；
2. 使用Array.from()方法，例如：Array.from(arguments)；
3. 使用slice方法，例如：Array.prototype.slice.call(arguments)。

