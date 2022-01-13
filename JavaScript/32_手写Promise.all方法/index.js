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

// test
let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1)
  }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2)
  }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3)
  }, 3000)
})
promiseAll([p3, p1, p2, 5]).then(res => {
  console.log(res) // [3, 1, 2]
})
