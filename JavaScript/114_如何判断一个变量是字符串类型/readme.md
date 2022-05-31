> 日期：2022/05/31
分类：JavaScript
题目：如何判断一个变量是字符串类型

- 直接使用typeof进行判断
- 使用Object.prototype.toSyring.call(str)的方式进行判断，但是这种方式有个问题，如果str是通过String构造函数创建的，返回的结果也是true。