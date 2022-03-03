> 日期：2022/03/03
分类：JavaScript、编程题
题目：编写一个方法，将短横线命名法转换为驼峰命名法

```JavaScript
const format = str => {
  const arr = str.split("-");
  for (let i = 1; i < arr.length; i++) {
    const newArr = arr[i].split("");
    newArr[0] = newArr[0].toUpperCase();
    arr[i] = newArr.join("");
  }
  return arr.join("");
};
// test
console.log(format("background-color")); // backgroundColor

```