> 日期：2022/06/02
分类：JavaScript、ECMAScript
题目：说一下你了解的Promise方法

- Promise.prototype.then：两个回调函数，第一个表示处理成功的回调，第二个表示处理失败的回调
- Promise.prototype.catch：与then方法的第二个回调函数一致
- Promise.prototype.finally：不管失败与否都会触发(ES2018)
- Promise.prototype.allSettled：ES2020中提出，接受一个可迭代对象，每个成员都是一个Promise；返回值包含每一个Promise处理的结果
- Promise.all()：接受一个可迭代对象，每个成员都是一个Promise；返回一个Promise示例，如果参数中任意一个成员返回rejected，该Promise实例是rejected，否则就是resolved。
- Promise.resolve()：返回一个resolved状态的Promise实例
- Promise.reject()：返回一个rejected状态的Promise实例