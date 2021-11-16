> 日期：2021/11/16
分类：JavaScript、DOM、字节
题目：写一个`mySetInterVal(fn, a, b)`，每次间隔`a,a+b,a+2b,...,a+nb`的时间，然后写一个`myClear`，停止上面的`mySetInterVal`

## 面向对象方法实现

```JavaScript
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

```

