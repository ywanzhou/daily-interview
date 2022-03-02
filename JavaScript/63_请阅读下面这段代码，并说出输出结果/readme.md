> 日期：2022/03/02
分类：JavaScript
题目：请阅读下面这段代码，并说出输出结果

```JavaScript
class Phone {
  constructor(price) {
    this.price = price;
  }
  get price() {
    return 999;
  }
}
const p = new Phone(888);
console.log(p.price);

```

这段代码会报错，因为这里只对price属性设置了get，并没有设置set，所以说price默认是只读的；但是在constructor中为price进行了赋值，所以抛出了异常。

