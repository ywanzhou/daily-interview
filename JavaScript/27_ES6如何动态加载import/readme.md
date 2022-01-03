> 日期：2022/01/03
分类：JavaScript、ES6
题目：ES6如何动态加载import

```js
import(/* 模块名 */).then(module =>{
  // 加载的模块
})
// 这里以 Lodash 为例
import('lodash').then(_=>{
  _.cloneWith()
})
```

