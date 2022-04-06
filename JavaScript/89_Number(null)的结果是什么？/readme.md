> 日期：2022/04/06
分类：JavaScript
题目：Number(null)的结果是什么？

结果是0，除了这个还有下面这些的结果全部为0：

- Number()

- Number(0)

- Number('')

- Number('0')

- Number(false)

- Number(null)

- Number([])

- Number([0])

这道题的考点主要是隐式类型转换。