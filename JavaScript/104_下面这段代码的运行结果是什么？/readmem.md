> 日期：2022/05/03
分类：JavaScript
题目：下面这段代码的运行结果是什么？

```JavaScript
function fn(value) {
  console.log(arguments instanceof Array)
  console.log(arguments.length)
  console.log(value)
}

fn(1, 2, 3)

```

- 第一个输出false，arguments并不是数组，而是一个类数组对象；
- 第二个输出3，arguments不是数组但是它具有length属性；
- 第三个输出1，因为调用fn传递的第一个参数就是1。

