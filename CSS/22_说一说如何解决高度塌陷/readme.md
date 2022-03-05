> 日期：2022/03/05
分类：CSS
题目：说一说如何解决高度塌陷

- 给父元素添加overflow:hidden;
- 在浮动元素下方添加空div，并添加样式clear both;
- 设置父元素:after{content: ''; clear: both; dispaly: block; overflow: hideen;}

