> 日期：2022/05/17
分类：Vue、React
题目：虚拟DOM真的比真实DOM快吗？

如果是固定DOM的渲染，虚拟DOM不可能做到比原生DOM更快；虚拟DOM的存在是在于是可维护的，假如存在一个长列表，每次仅仅变化一两条数据，我们不可能将整个长列表重新渲染，如果操作原生DOM对比每次哪个列表项发生了变化，缓存原生DOM的话会浪费很多内容，毕竟DOM中存在很多必须要的属性；这个时候如果采用虚拟DOM，虚拟DOM本身就是一个对象，比原生DOM占用的内存很少，diff相对更加容易，在一定程度上可以说虚拟DOM比真实DOM更快。