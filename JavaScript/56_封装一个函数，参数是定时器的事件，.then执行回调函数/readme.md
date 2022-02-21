> 日期：2022/02/21
分类：JavaScript
题目：封装一个函数，参数是定时器的事件，.then执行回调函数

```JavaScript
const sleep = time => {
  return new Promise(resolve => setTimeout(resolve, time));
};

```

