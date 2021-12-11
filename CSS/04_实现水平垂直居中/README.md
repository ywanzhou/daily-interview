> 日期：2021/12/11
分类：CSS、布局
题目：实现水平垂直居中

### 行内块

```css
.parent {
  /* 1. 设置行高等于容器高度 */
  line-height: 500px;
  /* 通过 text-align: center; 实现水平居中 */
  text-align: center;
}
.child {
  /* 将子级元素设置为水平块级元素 */
  display: inline-block;
  /* 通过 vertical-align: middle; 实现垂直居中 */
  vertical-align: middle;
}

```

###  定位实现水平垂直居中方案(一)

```css
.parent {
  /* 1. 使子元素相对于本元素定位 */
  position: relative;
}
.child {
  /* 2. 开启绝对定位 */
  position: absolute;
  /* 3. 设置该元素的偏移量，值为 50%减去宽度/高度的一半 */
  left: calc(50% - 150px);
  top: calc(50% - 150px);
}

```

### 定位实现水平垂直居中方案(二)

```css
.parent {
  /* 1. 使子元素相对于本元素定位 */
  position: relative;
}
.child {
  /* 2. 开启绝对定位 */
  position: absolute;
  /* 3. 设置该元素的偏移量，值为 50% */
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -150px;
}

```

### 定位实现水平垂直居中方案(三)

```CSS
.parent {
  /* 1. 使子元素相对于本元素定位 */
  position: relative;
}
.child {
  /* 2. 开启绝对定位 */
  position: absolute;
  /* 3. 将子元素拉满整个容器，定高定宽 */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* 4. 通过 margin:auto 实现水平垂直居中 */
  margin: auto;
}

```

### 定位实现水平垂直居中方案(四)

```CSS
.parent {
  /* 1. 使子元素相对于本元素定位 */
  position: relative;
}
.child {
  /* 2. 开启绝对定位 */
  position: absolute;
  /* 3. 设置该元素的偏移量，值为 50%*/
  left: 50%;
  top: 50%;
  /* 通过translate反向偏移的方式，实现居中 */
  transform: translate(-50%, -50%);
}


```

### Flex方案

```css
.parent {
  /* 1. 将元素设置为 Flex 布局 */
  display: flex;
  /* 2. 通过 justify-content 以及 align-items: center 实现 */
  /* justify-content: center;
  align-items: center; */
}
.child {
  /* 或者通过 margin auto 实现 */
  margin: auto;
}

```

### Grid方案

```css
.parent {
  /* 1. 元素设置为Grid 元素 */
  display: grid;
  /* 通过 items 属性实现*/
  /* align-items: center; */
  /* justify-items: center; */
  /* items 的缩写 */
  /* place-items: center; */

  /* 或者通过 content 属性 */
  /* align-content: center; */
  /* justify-content: center; */
  /* content 的缩写 */
  /* place-content: center; */
}
.child {
  /* 或者通过 margin auto 实现 */
  /* margin: auto; */
  /* 或者通过 self 属性 */
  /* align-self: center;
  justify-self: center; */
  /* self 的缩写 */
  place-self: center;
}

```