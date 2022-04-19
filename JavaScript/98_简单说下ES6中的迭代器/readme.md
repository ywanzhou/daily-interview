> 日期：2022/04/19
分类：JavaScript、ES6
题目：简单说下ES6中的迭代器

迭代器（Iterator）说白了就是一种接口，为不同的数据接口提供统一的遍历方式；Symbol中的iterator属性作为迭代器的入口，这个作为函数，return一个对象，对象中包含一个next()方法，next方法return一个对象，包含value和done。

```JavaScript
const obj = {
    [Symbol.iterator] () {
        return {
            next () {
                console.log('迭代器执行了');
                return {
                    value: '',
                    done: true
                }
            }
        }
    }
}
```

