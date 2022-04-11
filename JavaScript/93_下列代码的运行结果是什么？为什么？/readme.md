> 日期：2022/04/11
分类：JavaScript
题目：下列代码的运行结果是什么？为什么？

```JavaScript
for (var i = 0; i < 2; i++) {
  setTimeout(function () {
    console.log(i)
  }, 0)
}

```

运行结果会打印两个2，因为setTimeout是异步执行的，其中定时函数会被加入执行对待，等待for循环执行完毕；执行完毕后i的值变为2，所以会打印两个2。

