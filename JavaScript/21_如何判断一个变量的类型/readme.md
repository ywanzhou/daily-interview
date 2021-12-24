> 日期：2021/12/24
分类：JavaScript
题目：如何判断一个变量的类型

在JavaScript中判断一个变量的类型主要有如下4种方式

1. 使用typeof操作符，该操作符可以返回的类型有undefined，function，string，boolean，object，number，symbol，bigint八种。
2. 使用instanceof运算符，该运算符判断实例对象是否在构造函数的原型链中。
3. 使用实例对象的constructor属性，判断是否指向具体类型的构造函数
4. 通过toString()方法来获取每个对象的类型。为了每个对象都能通过Object.prototype.toString()来检测，需要以 Function.prototype.call()或者Function.prototype.apply()的形式来调用，传递要检查的对象作为第一个参数。实例代码如下：

```JavaScript
let toString = Object.prototype.toString;

toString.call(new Date); // [object Date]
toString.call(new String); // [object String]
toString.call(Math); // [object Math]
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

