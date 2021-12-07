> 日期：2021/12/06
分类：JavaScript
题目：用js递归的方式写1~100的求和

```JavaScript
function num(n) {
  if (n == 1) return 1
  return num(n - 1) + n
}
let s = num(100)
console.log('sum', s) // sum 5050

```

