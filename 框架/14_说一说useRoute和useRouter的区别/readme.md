> 日期：2022/04/14
分类：Vue
题目：说一说useRoute和useRouter的区别

- useRouter返回router的实例，可以调用所有实例上的方法，相当于在模板中使用$router；
- useRoute返回当前路由信息的对象，包含地址、参数等属性，这些属性都是只读的，可以使用watch监听变化，相当于在模板中使用$route；