> 日期：2021/11/26
分类：JavaScript
题目：==和===、以及Object.is的区别

```JavaScript
// == 存在类型转换，不同类型的两个值会将其转换为同类型，然后进行比较
' ' == 0 //true
'0' == 0 //true
123 == '123' //true
null == undefined //true
[] == '' // true

// === 严格比较值是否相等，不会进行类型转换
' ' === 0 //false
'0' === 0 //false
123 === '123' //false
null === undefined //false
[] === '' // false

// Object.is() 可以理解为加强的 ===
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

