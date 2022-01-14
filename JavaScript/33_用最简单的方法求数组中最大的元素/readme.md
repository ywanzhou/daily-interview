> 日期：2022/01/14
分类：JavaScript
题目：用最简单的方式求一个数组中最大的元素

```JavaScript
const arr = [1, 23, 69, 120, 2, 42]
const maxVal = arr.reduce((max, val) => (max >= val ? max : val))
```

```JavaScript
const arr = [1, 23, 69, 120, 2, 42]
const maxVal = Math.max.apply(null, arr)

```

```JavaScript
const arr = [1, 23, 69, 120, 2, 42]
const maxVal = Math.max(...arr)

```

