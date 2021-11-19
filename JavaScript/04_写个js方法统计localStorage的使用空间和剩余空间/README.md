> 日期：2021/11/19
分类：JavaScript
题目：写个js方法统计localStorage的使用空间和剩余空间

```JavaScript
/**
 * @author: 一碗周
 * @description: localStorage 的存储空间为 5M 的字符数，也就是 10M 的字节数（key value都占空间）
 * @date: 2021-11-19 09:41
 */

/**
 * @description: 计算已经的大小 返回值 * 2 即可获得字节数
 * @param {null}
 * @returns {number} 已经使用的字符数
 */
export function cUSize() {
  // Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组
  return (
    Object.entries(localStorage)
      // 将内容全部转换为字符串并计算长度。
      // 这里如果使用 JSON.stringify() 方法的话会自动为一些对象增加转义字符
      .map(v => v.join(''))
      .join('').length
  )
}

/**
 * @description: 计算剩余空间，返回值 * 2 即可获得字节数
 * @param {null}
 * @returns {number} 剩余可用的字符数
 */
export function cSSize() {
  const count = 5 * 1024 * 1024
  const uSize = cUSize()
  return count - uSize
}

```

