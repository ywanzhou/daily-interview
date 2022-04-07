// 冒泡排序
let arr = [10, 89, 41, 85, 66, 8, 39]
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    }
  }
}
console.log(arr)
