> 日期：2021/12/03
分类：CSS
题目：CSS实现两列布局

CSS实现两列布局的方式，要求左栏固定宽度(100px)，右栏宽度自适应填满。（可以列出不同 实现方式）

HTML结构如下：

```html
<!-- 解决高度塌陷 -->
<div class="container clearfix">
  <div class="left">定宽</div>
  <div class="right">自适应</div>
</div>
```

方式一：使用float+calc()函数实现，实现代码如下：

```css
.left {
  /* 左边列开启浮动 */
  float: left;
}
.right {
  /* 右边列开启浮动 */
  float: left;
  /* 宽度减去左列的宽度 */
  width: calc(100% - 100px);
}
```

方式二：使用float+margin-left实现

```css
.left {
  float: left;
}
.right {
  float: left;
  margin-left: 100px;
}
```

方式三：使用absolute+margin-left实现

```css
.left {
  position: absolute;
}
.right {
  margin-left: 100px;
}
```

方式四：使用float+overflow实现

```css
.left {
  /* 1. 左侧元素开始浮动 */
  float: left;
}
.right {
  /* 2. 右侧自适应元素设置 overflow 会创建一个BFC 完成自适应 */
  overflow: hidden;
}
```

方式五：flex实现

```css
.container {
  display: flex;
}
.right {
  flex: 1;
  /* flex: 1; 表示 flex-grow: 1; 即该项占所有剩余空间 */
}
```

方式六：grid实现

```css
.container {
  display: grid;
  /* 将其划分为两行，其中一列有本身宽度决定， 一列占剩余宽度*/
  grid-template-columns: 100px 1fr;
}
```

