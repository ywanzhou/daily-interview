> 日期：2021/12/28
分类：JavaScript、ES6
题目：介绍下 Set、Map、WeakSet 和 WeakMap 的区别？

1. Set：
    - 成员唯一、无序且不重复；
    - 类似于数组，只有键值没有键名；
    - 可以遍历，方法有很多，例如：add、delete、clear、keys、values、forEach等。
    - 可以保存undefined和NaN，如果有重复的NaN，只会存储一个。
2. Map：
    - 本质上是键值对的集合，类似于对象；
    - 可以遍历，方法有很多；
    - 可以很各种各种数据格式进行转换
3. WeakSet：
    - 成员都是对象
    - 成员都是弱引用，可以被垃圾回收机制回收，可以用来保存DOM节点，不容易造成内存泄漏；
    - 不能遍历，方法有add、delete、has。
4. WeakMap
    - 只能接受对象作为键名，除null外；
    - 键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的；
    - 不能遍历，方法有get、set、has、delete

