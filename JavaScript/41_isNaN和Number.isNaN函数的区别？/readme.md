> 日期：2022/01/28
分类：JavaScript
题目：isNaN和Number.isNaN函数的区别？

- isNaN()函数会将参数先转换为数值，然后在判断其是否是NaN，比如说isNaN({})，因为一个空对象转换为数组时，其结果是NaN，所以这个函数的结果是true；
- Number.isNaN()函数是ES6新增函数，该方法对比isNaN来说，不会进行类型转换，传入的值是NaN时，才会返回true，例如Number.isNaN({})的结果是false。

