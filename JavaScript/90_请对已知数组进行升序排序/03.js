// 插入排序
let arr = [10, 89, 41, 85, 66, 8, 39]
for (let i = 1; i < arr.length; i++) {
  for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
    ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
  }
}
console.log(arr)
