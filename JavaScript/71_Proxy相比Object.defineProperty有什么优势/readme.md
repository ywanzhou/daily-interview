> 日期：2022/03/08
分类：JavaScript、ES6
题目：Proxy相比Object.defineProperty有什么优势

- Proxy可以监听整个对象的变化，而Object.defineProperty只能监听单个属性；
- Proxy共有get、set等13中兼容方法，而Object.defineProperty只有get和set两种；
- Proxy可以直接监听数组的变化。

