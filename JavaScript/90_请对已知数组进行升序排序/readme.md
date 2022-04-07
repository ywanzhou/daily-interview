> 日期：2022/04/07
分类：算法
题目：请对已知数组进行升序排序

```JavaScript
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

```

```JavaScript
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

```

```JavaScript
// 插入排序
let arr = [10, 89, 41, 85, 66, 8, 39]
for (let i = 1; i < arr.length; i++) {
  for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
    ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
  } 
}
console.log(arr)

```