// 选择排序
let arr = [10, 89, 41, 85, 66, 8, 39]
for (let i = 1; i < arr.length; i++) {
  let minIndex = i - 1
  for (let j = i; j < arr.length; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j
    }
  }
  if (minIndex !== i - 1) {
    ;[arr[i - 1], arr[minIndex]] = [arr[minIndex], arr[i - 1]]
  }
}
console.log(arr)
