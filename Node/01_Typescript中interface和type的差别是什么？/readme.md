> 日期：2022/04/25
分类：TypeScript
题目：Typescript中interface和type的差别是什么？

- interface和type都可以用来表示类型；
- type可以理解为类型别名，实现实现interface做不到的事情，例如联合类型、基本类型等；
- interface定义名称重复的话两者合并，而type不能重复声明一个关键字。