Number.prototype.add = function (num) {
  if (typeof num !== 'number') {
    throw new TypeError('num 不是一个数字')
  }
  return this + num
}
Number.prototype.minus = function (num) {
  if (typeof num !== 'number') {
    throw new TypeError('num 不是一个数字')
  }
  return this - num
}

// 测试
console.log((5).add(3).minus(2)) // 6
console.log((15).add(5).minus(10)) // 10
