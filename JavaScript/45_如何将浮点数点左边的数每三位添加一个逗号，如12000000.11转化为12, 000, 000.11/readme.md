> 日期：2022/02/01
分类：JavaScript、编程
题目：如何将浮点数点左边的数每三位添加一个逗号，如12000000.11转化为12, 000, 000.11

1. 使用正则表达式

```JavaScript
function format(number) {
  return number && number.replace(/(?!^)(?=(\d{3})+\.)/g, ",");
}
```
1. 使用Intl.NumberFormat().format()方法

```JavaScript
function format(number) {
  return Intl.NumberFormat().format(number)
}
```
1. 使用Number.prototype.tolocaleString('en')方法

```JavaScript
function format(number) {
  return number.toLocaleString('en')
}
```

