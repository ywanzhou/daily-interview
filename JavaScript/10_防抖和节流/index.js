// // 防抖
// function debounce(f, wait = 300) {
//   let timeOut
//   return function () {
//     const context = this,
//       args = arguments
//     clearTimeout(timeOut)
//     timeOut = setTimeout(function () {
//       f.apply(context, args)
//     }, wait)
//   }
// }
// // 测试防抖函数
// function fun() {
//   console.log('一碗周')
// }
// let f = debounce(fun, 500)
// let count = 0
// let t = setInterval(() => {
//   console.log(count)
//   f()
//   if (++count === 3) {
//     clearInterval(t)
//     // count = 0
//   }
// }, 510) // 执行三次函数

// /**
//  * @description: 防抖优化版
//  * @param {*} f 需要防抖的函数
//  * @param {*} wait 延迟时间
//  * @param {*} immediate 是否需要立即执行
//  * @returns {*} 经过防抖处理的函数
//  */
// function debounce(f, wait = 300, immediate = false) {
//   let timeOut
//   return function () {
//     const context = this,
//       args = arguments
//     if (timeOut) clearTimeout(timeOut)
//     if (immediate) {
//       const callNow = !timeOut
//       timeOut = setTimeout(function () {
//         timeOut = null
//       }, wait)
//       console.log(callNow)
//       if (callNow) f.apply(context, args)
//     } else {
//       timeOut = setTimeout(function () {
//         f.apply(context, args)
//       }, wait)
//     }
//   }
// }
// // 测试防抖函数
// function fun() {
//   console.log('一碗周')
// }
// let f = debounce(fun, 500, true)
// let count = 0
// let t = setInterval(() => {
//   f()
//   if (++count === 1) {
//     clearInterval(t)
//   }
// }, 510)

/**
 * @description: 节流函数
 * @param {*} f 需要节流处理的函数
 * @param {*} wait 多长时间允许执行一次，单位毫秒
 * @returns {*} 节流后处理的函数
 */
function throttle(f, wait) {
  let timeOut
  return function () {
    const context = this
    const args = arguments
    if (!timeOut) {
      timeOut = setTimeout(function () {
        timeOut = null
        f.apply(context, args)
      }, wait)
    }
  }
}

// 测试防抖函数
function fun() {
  console.log('一碗周')
}
let f = throttle(fun, 500, true)
let count = 0
let t = setInterval(() => {
  f()
  if (++count === 5) {
    clearInterval(t)
  }
}, 300)
