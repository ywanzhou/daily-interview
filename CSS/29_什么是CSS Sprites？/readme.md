> 日期：2022/05/02
分类：CSS
题目：什么是CSS Sprites？

CSS Sprites又称CSS精灵图或者CSS雪碧图，是性能优化的一种方案，将页面涉及到的多个图片合并为一张大图，从而减少HTTP请求次数，提高页面的性能。

使用起来也比较简单，通过background-image、background-repeat、background-position属性调整图片位置，实现最终效果；缺点就是合成图片以及维护图片的成本比较比较高。

