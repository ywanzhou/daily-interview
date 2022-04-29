> 日期：2022/04/29
分类：HTML、DOM
题目：如何禁用a标签跳转页面或定位链接

禁用a标签的跳转可以通过两种方式实现：

1. 通过href属性，将其值设置为javascript:;或者javascript:void(0);即可；
2. 阻止默认行为，可以为点击事件的处理函数的返回值设置为false或者调用event对象中的preventDefault()方法。