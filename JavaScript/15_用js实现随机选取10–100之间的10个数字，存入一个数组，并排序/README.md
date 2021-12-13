> 日期：2021/12/13
分类：JavaScript
题目：用js实现随机选取10–100之间的10个数字，存入一个数组，并排序。

```JavaScript
let arr = []
function getRandom(start, end) {
  let choice = end - start + 1
  return Math.floor(Math.random() * choice + start)
}
for (let i = 0; i < 10; i++) {
  arr.push(getRandom(10, 100))
}
arr.sort()

```

