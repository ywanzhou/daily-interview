> 日期：2021/11/27
分类：JavaScript
题目：实现lodash 的_.get()方法

在JavaScript中经常会出现嵌套调用的这种情况，就比如下面这个对象：

```JavaScript
const a = {
  b: {
    c: {
      d: {
        e: '一碗周',
      },
    },
  },
}

```

我们想要获取最后的`e`的值，需要通过`a.b.c.d.e`的方式来获取，但是这样的话如果中间某个对象没有获取到，就会抛出异常，所以我们一般这样写`a && a.b && a.b.c && a.b.c.d && a.b.c.d.e`，这种写法说实话，有些过于啰嗦冗长了。

尤其是在GraphQL中，这种嵌套的调用是难以避免的。

在Lodash 中提供了`_.get()`方法，该方法接收三个参数，第一个参数是需要检索的对象，第二个是属性的路径，第三个参数是可选的，表示获取到`undefined`的时，返回的值。也就是说我们用`_.get(a, 'b.c.d.e')`即可改写那段代码。

现在我们就来手动模拟一下`_.get()`的实现。

```JavaScript
function get(source, path, defaultValue = undefined) {
  // a[3].b | a.3.b -> [a,3,b]
  // path 中也可能是数组的路径，全部转化成 . 运算符并组成数组
  const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.')
  let result = source
  for (const p of paths) {
    // 注意 null 与 undefined 取属性会报错，所以使用 Object 包装一下。
    result = Object(result)[p]
    if (result == undefined) {
      return defaultValue
    }
  }
  return result
}
// 测试用例
console.log(get({ a: null }, 'a.b.c', 3)) // 3
console.log(get({ a: undefined }, 'a', 3)) // 3
console.log(get({ a: null }, 'a', 3)) // 3
console.log(get({ a: [{ b: 1 }] }, 'a[0].b', 3)) // 1

```

在ES2020中新增了两个操作符，即是`?.`和`??`，分别表示可选链操作符和空值合并操作符，上面的写法可以简化为如下代码

```JavaScript
a?.b?.c?.d?.e ?? '没有获取到'
```