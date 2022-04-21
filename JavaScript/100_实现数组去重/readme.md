> 日期：2022/04/21
分类：JavaScript、编程题
题目：实现数组去重

1. 使用filter

```JavaScript
const arr = [1, 2, 1, "1", 17, false, true, true, false, "true", "a"]
const unique = arr => {
  return arr.filter((item, index) => {
    // 例如索引为2的值，arr[2] 的结果是1，arr.indexOf(1)的结果是0，说明重复
    return arr.indexOf(item) === index
  })
}
console.log(unique(arr)) // [(1, 2, "1", 17, false, true, "true", "a")]

```
1. 使用Set

```JavaScript
const arr = [1, 2, 1, "1", 17, false, true, true, false, "true", "a"]
console.log(Array.from(new Set(arr))) // [(1, 2, "1", 17, false, true, "true", "a")]

```
1. 使用indexOf

```JavaScript
const arr = [1, 2, 1, "1", 17, false, true, true, false, "true", "a"]
const unique = arr => {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    // 只有新数组不存在时才push
    if (res.indexOf(arr[i]) === -1) res.push(arr[i])
  }
  return res
}

console.log(unique(arr)) // [(1, 2, "1", 17, false, true, "true", "a")]

```

