> 日期：/2022/05/14
分类：HTML
题目：script标签可以出现在什么位置？那种比较好？

script标签可以放在body标签中和head标签中，将script标签放在head标签中时，浏览器发现script标签会加载script，加载时会阻塞HTML的解析，造成页面内容呈现滞后；

将script放在body标签中，会解析完整个HTML后再去加载JS，但是对于一些高度依赖js的网页就会显得慢了。