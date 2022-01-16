> 日期：2022/01/16
分类：Vue、框架
题目：Vue3.0里为什么要用Proxy API替代defineProperty API？

Object.defineProperty只能通过遍历对象属性的方式进行数据劫持，而Proxy则直接可以劫持整个对象，相当于我们直接操作这个对象就可以达到相应式目的；除此之外，除此之外Object.defineProperty API，只能劫持getter和setter，Proxy除getter和setter外还可以劫持`apply`、`has`等13种劫持方法。

