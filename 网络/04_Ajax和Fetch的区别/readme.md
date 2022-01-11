> 日期：2022/01/11
分类：Ajax、网络
题目：Ajax和Fetch的区别

- Fetch是ES6规范，兼容性没有Ajax好；
- Ajax是使用XMLHttpRequest对象发起的，使用起来麻烦，而Fetch步骤比Ajax要简单；
- Fetch默认情况下不会接受或者发送cookies；
- Fetch仅仅对网络请求报错，对于400、500都表示成功；
- Fetch没有办法原生检测请求的进度，而Ajax可以。

