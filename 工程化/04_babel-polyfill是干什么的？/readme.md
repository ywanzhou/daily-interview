> 日期：2022/04/20
分类：前端工程化
题目：babel-polyfill是干什么的？

Babel默认解决ECMAScript语法的新特性，比如Generator、Set、Proxy等，将这些新特性转换为ES5的写法，而Babel-polyfill解决API层面的问题，例如Array.form方法，如果不使用babel-polyfill则默认不会进行转码。