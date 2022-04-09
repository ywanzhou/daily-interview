> 日期：2022/04/09
分类：JavaScript
题目：简单说一下==是怎么工作的

1. 判断两边类型是否相等，如果相等则进行比较，否则进行类型转换；
2. 判断是否是null==undefined，如果是返回true；
3. 判断两者类型是否为string和number，是的话就会将字符串转换为number；
4. 判断其中一方是否为boolean，是的话就会把boolean转为number再进行比较；
5. 如果是Object与原始类型比较，Object会调用提供的toString或者valueOf，然后进行比较。

