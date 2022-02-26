> 日期：2022/02/26
分类：JavaScript、选择器
题目：以下哪个语句打印结果是false？

A：3==true

B：2=='2'

C：null==undefined

D：isNaN('true')

正确答案：A

解析：选项A中的true会被转换为数值1，所以结果为false；选项B中的数值和字符串会被转换为相同类型进行比对；选项C两者均会被转换为boolean的false，选项D的'true'是一个string类型的值，转换为number是一个NaN，所以结果为true。

