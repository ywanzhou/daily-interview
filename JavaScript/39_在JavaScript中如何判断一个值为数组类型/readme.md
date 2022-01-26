> 日期：2022/01/26
分类：JavaScript
题目：在JavaScript中如何判断一个值为数组类型

- instanceof运算符
- Array.isArray()方法
- Object.prototype.isPrototypeOf()方法：用于判断一个对象在另一个对象的原型链上
- 可以通过Object.getPrototypeOf()方法获取对象原型，与数组原型进行对比
- Object.prototype.toString()方法，使用call或者apply调用

