> 日期：2022/05/13
分类：JavaScript、编程题
题目：用尽可能多的方法实现数组扁平化

数组的扁平化其实就是将一个嵌套多层的数组array（嵌套可以是任何层数）转换为只有一层的数组。

1. 递归实现：

```JavaScript
// 递归实现
const arr = [1, 2, [3, 4, [5, 6]]]

function flatten(arr) {
  let result = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      // 使用 concat 方法拼接数组
      result = result.concat(flatten(item))
    } else {
      result.push(item)
    }
  })
  return result
}
console.log(flatten(arr)) // [ 1, 2, 3, 4, 5, 6 ]

```
1. `reduce()`方法实现：

```JavaScript
// reduce 方法实现
const arr = [1, 2, [3, 4, [5, 6]]]

function flatten(arr) {
  // 使用 reduce 方法的第三个参数添加一个默认值
  return arr.reduce((result, next) => {
    // 判断 next 是否为数组，如果是数组递归调用，不是直接将结果合并到之前的结果中
    return result.concat(Array.isArray(next) ? flatten(next) : next)
  }, [])
}
console.log(flatten(arr)) // [ 1, 2, 3, 4, 5, 6 ]

```
1. 展开运算符实现：

```JavaScript
// 展开运算符实现
const arr = [1, 2, [3, 4, [5, 6]]]
function flatten(arr) {
  //  只要arr数组中还存在数组元素，循环就继续进行
  while (arr.some(item => Array.isArray(item))) {
    // 展开数组，拼接空数组
    arr = [].concat(...arr)
  }
  return arr
}
console.log(flatten(arr)) // [ 1, 2, 3, 4, 5, 6 ]

```