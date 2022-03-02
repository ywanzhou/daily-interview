> 日期：2022/03/02
分类：Vue
题目：Vue父子组件生命周期的执行顺序是什么？

加载渲染过程

父beforeCreate→父created→父beforeMount→子beforeCreate→子created→子beforeMount→子mounted→父mounted

更新过程

父beforeUpdate→子beforeUpdate→子updated→父updated

销毁过程

父beforeDestroy→子beforeDestroy→子destroye→父destroyed

