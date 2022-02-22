> 日期：2022/02/22
分类：JavaScript、编程题
题目：写一个函数来判断一个对象是否为数组

```JavaScript
const isArray = o => {
  if (typeof o === "object")
    return Object.prototype.toString.call(o) === "[object Array]";
  return false;
};

```

