function MySetInterVal(fn, a, b) {
  this.a = a
  this.b = b
  this.count = 0
  this.handle = null
  this.mySetInterVal = () => {
    this.handle = setTimeout(() => {
      fn()
      this.count++
      // 开始下一次的调用
      this.mySetInterVal()
    }, this.a + this.count * this.b)
  }
  this.myClear = () => {
    clearTimeout(this.handle)
    this.count = 0
  }
}

// 测试
const test = new MySetInterVal(
  () => {
    console.log('一碗周')
  },
  1000,
  1000,
)
test.mySetInterVal()
test.myClear()
