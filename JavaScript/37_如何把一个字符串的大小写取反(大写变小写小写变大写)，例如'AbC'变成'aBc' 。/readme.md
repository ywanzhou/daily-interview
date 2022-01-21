> 日期：2022/01/21
分类：JavaScript、编程
题目：如何把一个字符串的大小写取反(大写变小写小写变大写)，例如'AbC'变成'aBc' 。

```JavaScript
const swapString = str => {
  if (typeof str !== 'string') throw new TypeError('str not a string')
  let arr = str.split('')
  return arr
    .map(_str =>
      _str === _str.toLowerCase() ? _str.toUpperCase() : _str.toLowerCase(),
    )
    .join('')
}
console.log(swapString('AbC')) // aBc

```

