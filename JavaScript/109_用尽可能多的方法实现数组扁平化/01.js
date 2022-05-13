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
