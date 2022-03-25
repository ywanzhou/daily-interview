const shuffle = arr => {
  const newArray = [...arr]
  let { length: len } = newArray
  while (len) {
    // 返回一个不大于 len 的随机索引
    const i = Math.floor(Math.random() * len--)
    // 对调替换位置
    ;[newArray[i], newArray[len]] = [newArray[len], newArray[i]]
  }
  return newArray
}
const arr = shuffle([1, 2, 3, 4, 5, 6, 7])
console.log(arr) // [6, 1, 3, 2, 4, 7, 5]
