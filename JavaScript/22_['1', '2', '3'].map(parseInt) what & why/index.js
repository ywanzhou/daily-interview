function doubleNum(n, i) {
  let doubleN = 2 * n
  console.log(`第{i+1}个元素的的二倍是${doubleN}`)
  return doubleN
}
let newArr = [1, 2, 3].map(doubleNum)
console.log(newArr)
/* 执行结果如下：
第{i+1}个元素的的二倍是2
第{i+1}个元素的的二倍是4
第{i+1}个元素的的二倍是6
[ 2, 4, 6 ]
 */
