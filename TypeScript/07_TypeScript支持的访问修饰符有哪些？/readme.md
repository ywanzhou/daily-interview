> 日期：2022/04/24
分类：TypeScript
题目：TypeScript支持的访问修饰符有哪些？

TS中的访问修饰符与C++相同，即public、private、protected，这些修饰符决定了类中成员的可访问性；具体如下：

- public，即公共的，类中的所有成员都可以被实例或者子类访问，如果未指定修饰符就是public；
- projected，受保护的，类的子类可以访问；
- private，私有的，只有该类的成员可以访问。