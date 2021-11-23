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
