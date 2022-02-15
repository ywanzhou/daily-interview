> 日期：2022/02/16
分类：CSS
题目：如何实现水平居中？

- 行内元素，为父元素设置：text-aligin:center；
- 父级子级均为块级且宽度固定：margin:0 auto；
- 父相子绝，left: 0; right: 0; width: 固定; margin: auto；
- 父相子绝，left: 50%; margin-left: -宽度的一半；
- 父相子绝，left: 50%; transform: translateX(-50%);
- flex布局
- grid布局

