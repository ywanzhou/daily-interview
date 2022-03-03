> 日期：2022/03/03
分类：JavaScript
题目：foo = foo||bar，这行代码是什么意思？为什么要这样写？

这行代码与if(!foo)foo=bar;一直，就是说如果foo存在，foo的值不变，否则将bar赋值给foo。

这种写法是JavaScript的短路原则，通过&&和||操作符实现的。

