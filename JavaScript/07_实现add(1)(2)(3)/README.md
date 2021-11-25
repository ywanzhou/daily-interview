> 日期：2021/11/25
分类：JavaScript、函数柯里化
题目：实现`add(1)(2)(3)`

柯里化可以把接收多个参数的函数转换可以具有任意参数的函数，并且返回接收剩余参数且返回结果的新函数。

```JavaScript
/**
 * @description: 柯里化可以把接收多个参数的函数转换可以具有任意参数的函数，并且返回接收剩余参数且返回结果的新函数。
 * @author: 一碗周
 */

/**
 * 实现一个 curry() 函数
 * 功能：接收一个函数，返回一个柯里化函数
 */

// 1. 接收一个函数作为参数
const curry = function (fun) {
  // 通过 ...args 接收所有参数
  return function curried(...args) {
    /**
     * 判断接收的参数与 fun 需要的参数是否相同，如果相同则调用该函数并返回
     * 如果实参个数小于形参个数，则说明需要继续等待参数的传递，则需要返回一个函数
     * 通过 fun.length 属性可以获取 fun 函数的形参个数
     */
    if (args.length < fun.length) {
      return function () {
        /**
         * 通过闭包可以获取第一次传入的参数 args
         * 第二次传递的参数可以通过 arguments 获取，通过 Array.from() 将其转换为一个数组，并通过 Array.prototype.concat() 方法将其将两个数组合并
         * 最后通过 ... 运算符展开数组，作用参数递归调用函数
         * 这个过程将会一直重复执行，直到 args.length < fun.length 不成立时，才会结束这个过程
         */
        return curried(...args.concat(Array.from(arguments)))
      }
    } else {
      return fun(...args)
    }
  }
}

function oldAdd(a, b, c) {
  return a + b + c
}
// 创建柯里化的函数
const add = curry(oldAdd)
console.log(add(1)(2)(3))

```
