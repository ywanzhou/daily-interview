> 日期：2022/04/16
分类：JavaScript、代码分析
题目：下面这段代码的运行结果是什么？

```JavaScript
var a = "w"
let obj = {
  a: "o",
  print: function () {
    console.log(this.a)
  },
  print2: () => {
    console.log(this.a)
  },
}
let p = obj.print
let p2 = obj.print2
obj.print()
obj.print2()
p()
p2()

```

运行结果是：o w w w，分析如下：

- obj.print()：这个this指向obj，所以结果为o；
- obj.print2()：箭头函数的this指向执行环境的上下文，所以就是全局的w；
- p()：p是在全局作用域下，它指向的是obj.print，所以这个this指向的也就是window；
- p2()：箭头函数的this是静态的，这里引用的是obj.print2()，也就是还是window；

