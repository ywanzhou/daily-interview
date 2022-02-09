> 日期：2022/02/10
分类：JavaScript
题目：请描述cookies、sessionStorage和localStorage的区别

- cookie是网站为了标识用户身份而存储在用户本地中的数据（这些数据通常是经过加密的）；
- cookie数据始终在同源的HTTP请求中携带，即使不需要也会进行传递；
- sessionStorage和localStorage仅保存在本地，不会将数据发送到服务器；
- cookie的存储大小不会超过4k，而sessionStorage和localStorage的存储空间为5M的字符数；
- cookie在过期时间内有效、sessionStorage在关闭浏览器窗口前有效、localStorage持久有效。

