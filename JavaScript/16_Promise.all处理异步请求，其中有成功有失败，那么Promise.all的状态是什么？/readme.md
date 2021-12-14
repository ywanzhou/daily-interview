> 日期：2021/12/14
分类：JavaScript
题目：Promise.all处理异步请求，其中有成功有失败，那么Promise.all的状态是什么？

使用Promise.all处理异步请求时，可以将多个异步请求合并成一个处理，如果其中有一个异步请求出现失败，则通过Promise.all处理的那个异步请求的状态是失败的。

