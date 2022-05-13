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
