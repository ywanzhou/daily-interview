> 日期：2022/03/14
分类：Vue
题目：怎么为Vue3组件实现v-model？

1. 通过props接收一个值，如果是modelValue的话，父组件传递时不需要指定名称；
2. 定义emits，事件名称指定为update:modelValue；
3. 定义计算属性，get方法return的是props.modelValue，set方法执行emits('update:modelValue', value)；
4. 最后在父组件就可以通过v-model进行双向数据绑定。

