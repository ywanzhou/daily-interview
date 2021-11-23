> 日期：2021/11/23
分类：JavaScript
题目：链式调用的原理是什么？如何实现

链式调用的核心就是调用完方法后将自身示例返回。模拟实现链式调用代码如下：

```JavaScript
class HandleArray {
  constructor(arr) {
    this.array = arr
  }
  sayArr() {
    console.log(this.array)
    return this
  }
  addArr(val) {
    this.array.push(val)
    return this
  }
  delArr() {
    this.array.pop()
    return this
  }
}
const handleArray = new HandleArray([1, 2, 3, 4])

handleArray.sayArr().addArr(5).sayArr().delArr().sayArr()
/* 输出结果
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4 ]
 */

```