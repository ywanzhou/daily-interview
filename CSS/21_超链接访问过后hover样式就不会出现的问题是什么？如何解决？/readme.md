> 日期：2022/02/28
分类：CSS
题目：超链接访问过后hover样式就不会出现的问题是什么？如何解决？

这是因为我们设置了:visited伪类，且该样式在:hover伪类的后面，:hover伪类的演示就被覆盖了。

解决方法只需要按照LVHA(link→visited→hover→active)的顺序定义伪类即可。

