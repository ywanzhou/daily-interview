> 日期：2022/01/09
分类：CSS
题目：如何实现Sticky Footer布局

1. 绝对定位实现

```CSS
/* 1. 设置最外层容器为100% */
html,
body {
    height: 100%;
}
/* 2. 让子元素元素相对于容器元素进行定位，并设置容器元素最小高度为100% */
.main {
    position: relative;
    min-height: 100%;
}
/* 3. 在中间区域设置 padding-bottom 为footer 的高度 */
.container {
    padding-bottom: 100px;
}
/* 由于开启了绝对定位，宽度成了自适应，设置为100% bottom:0 始终保持底部 */
.footer {
    position: absolute;
    width: 100%;
    bottom: 0;
}

```
1. calc函数

```CSS
.container {
    /* 这里的 中间 部分的容器最少为视口宽度的 100% - 头部和底部两部分的高度即可完成该功能 */
    min-height: calc(100vh - 200px);
}
```
1. flex布局

```CSS
.main {
    /* 开启flex布局 */
    display: flex;
    /* 将子元素布局方向修改为垂直排列 */
    flex-flow: column;
    /* 设置最小高度为当前视口，使不管中间部分有多高，始终都可以保持在底部 */
    min-height: 100vh;
}
.container {
    /* 设置 中间 部分自适应 */
    flex: 1;
}

```
1. grid布局

```CSS
.main {
    /* 开启grid布局 */
    display: grid;
    grid-template-rows: auto 1fr auto;
    /* 设置最小高度为当前视口，使不管中间部分有多高，始终都可以保持在底部 */
    min-height: 100vh;
}

```