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
