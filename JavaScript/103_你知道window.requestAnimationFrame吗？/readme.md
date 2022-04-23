> 日期：2022/04/23
分类：JavaScript、DOM
题目：你知道window.requestAnimationFrame吗？

window.requestAnimationFrame()是DOM中用于执行动画的一个API，与setTimeout对比，该API执行回调函数的时机由浏览器决定，如果屏幕刷新率为60Hz，回调函数就每16.7ms执行一次；如果屏幕刷新率为75Hz，执行间隔就变成了13.3ms；它的优势是可以根据浏览器自动的调整执行次数，大大节省了资源。该API还可以作为节流函数使用，比如高频触发事件（resize、touchMove、drag、scroll等），在一个间隔只执行一次。