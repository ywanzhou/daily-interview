> 日期：2021/12/30
分类：HTTP
题目：开发中常用的几种Content-Type ？

1. application/x-www-form-urlencoded

    浏览器的的原生Form表单，如果不设置enctype属性，最终会以application/x-www-form-urlencoded方式提交数据。该方式提交的数据放在body里面，数据安装key1=val1&key2=val2的方式进行编码，key和val都进行了URL转码。
1. multipart/from-data

    该方式通常用来提交表单
1. application/json

    告诉服务器body是序列化后的JSON字符串
1. text/xml

    该方式主要用来提交XML格式的数据

