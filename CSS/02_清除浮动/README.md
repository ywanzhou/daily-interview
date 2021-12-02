> 日期：2021/12/02
分类：CSS
题目：清除浮动

清除浮动本质上就是两种方式，第一种就是通过CSS的`clear`属性来清除，还有一种就是开启BFC。

首先是通过`clear`属性，使用这个属性通常有两种方式，第一个就是在浮动元素后使用一个空元素如`<div class="clear"></div>` ，并在CSS中赋予`.clear{clear:both;}`属性即可清理浮动。亦可使用`<br class="clear" />`或`<hr class="clear" />`来进行清除。

另一种就是通过`::after`伪元素的方式，通常就是写一个固定的CSS，如下所示：

```css
.clearfix:after {
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
```

使用这种方式是目前比较通用的清除浮动的方法。

除了通过`clear`属性，开始BFC就比较简单了，通常使用的就是为父级元素增加一个`overflow`，将其值设置为`auto`或者`hidden`即可。

