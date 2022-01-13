> 日期：2022/01/13
分类：JavaScript、ES6
题目：手写Promise.all方法

```JavaScript
const promiseAll = iterable => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(iterable)) {
      throw new TypeError('iterable must be a array')
    }
    // 成功的数量
    let resolvedCounter = 0
    const resolveArr = []
    const len = iterable.length
    for (let i = 0; i < len; i++) {
      // 使用 Promise.resolve() 是防止使用非 Promise 对象
      Promise.resolve(iterable[i])
        .then(val => {
          resolvedCounter++
          resolveArr[i] = val
          if (resolvedCounter === len) {
            // 表示全部成功
            return resolve(resolveArr)
          }
        })
        .catch(err => {
          return reject(err)
        })
    }
  })
}
```

