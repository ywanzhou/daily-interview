> 日期：/2022/04/12
分类：JavaScript
题目：let a = 4 >= 6 || true && 1 || false;的结果是什么？

这个表达式的最终结果是1，执行过程如下：

1. 4≥6，返回结果为false；
2. true&&1，结果为1，逻辑与的优先级高于逻辑或；
3. false||1，结果为1，逻辑或短路原则；
4. 1||false，结果还是1。