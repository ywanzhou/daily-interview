> 日期：2022/02/08
分类：JavaScript
题目：代码分析题（请看代码，并说出result的结果）

代码如下：

```JavaScript
function Hero(name) {}
Hero.name = 'Ellie'
Hero.prototype.name = 'Bella'
const result = new Hero('Henry').name

```

result的结果为Bella。

在这里我们将Hero作为构造函数使用，Hero函数内部并没有初始化name属性，只有原型上存在name，结果为Bella，所以我们访问Hero的实例中的name访问的是Hero原型上的name，不存在自有属性name；前面的Hero.name是为Hero增加自有属性，并不是为Hero实例化后增加自有属性。

