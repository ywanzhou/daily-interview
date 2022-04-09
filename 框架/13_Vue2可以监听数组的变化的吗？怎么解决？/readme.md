> 日期：2022/04/09
分类：Vue
题目：Vue2可以监听数组的变化的吗？怎么解决？

Vue中对push、pop、shift、unshift、splice、sort、reverse方法实现了相应，而无法监听通过索引修改数组的变化；

想要实现通过索引的方式监听可以使用$set方法。

在Vue3中，使用Proxy实现数据监听，所以不存在这个问题。

