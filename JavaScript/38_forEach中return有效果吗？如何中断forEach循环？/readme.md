> 日期：2022/01/25
分类：JavaScript
题目：forEach中return有效果吗？如何中断forEach循环？

forEach中的return语句并没有效果，并不会影响循环的继续执行；

forEach本身是不可以中断的，如果想中断forEach的循环，需要在想要中断的地方执行throw语句，不过需要try语句，避免代码异常中断。

