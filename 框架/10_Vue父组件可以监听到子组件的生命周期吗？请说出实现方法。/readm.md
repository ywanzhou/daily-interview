> 日期：2022/03/10
分类：Vue
题目：Vue父组件可以监听到子组件的生命周期吗？请说出实现思虑

可以在父组件监听子组件的生命周期，实现方法就是在子组件生命周期触发的时候调用emit方法，父组件监听emit方法的触发。

