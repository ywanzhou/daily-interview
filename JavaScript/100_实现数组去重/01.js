const arr = [1, 2, 1, "1", 17, false, true, true, false, "true", "a"]
const unique = arr => {
  return arr.filter((item, index) => {
    // 例如索引为2的值，arr[2] 的结果是1，arr.indexOf(1)的结果是0，说明重复
    return arr.indexOf(item) === index
  })
}
console.log(unique(arr)) // [(1, 2, "1", 17, false, true, "true", "a")]
