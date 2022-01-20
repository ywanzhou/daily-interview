> 日期：2022/01/20
分类：JavaScript
题目：typeof NaN的结果是什么？

number

因为NaN的全称为not a number，在JavaScript中仍然表示一个number类型，它是一个特殊的值，如果使用全等运算符比较的话，NaN并不等于NaN，如果用Object.is()方法比较的话，两者是相等的。

