> 日期：2021/12/25
分类：CSS
题目：CSS中的属性设置百分比时对应的计算基准是？

- position属性的relative和absolute值，top和bottom、left和right基准是父级的height、width；
- position属性的fixed值，top和bottom、left和right基准是视口的height、width；
- height属性和width属性的基准点是父级的height、width；
- padding属性和margin属性的基准点是父级的width；
- border-radius属性的基准点是自身的height、width；
- background-size属性的基准点是自身的height、width；
- translateX，translateY的基准点是自身的height、width；
- line-height的基本点是自身的font-size
- font-size的基准点是父元素的font-size