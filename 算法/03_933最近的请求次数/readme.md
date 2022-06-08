> 日期：2022/06/08
分类：算法、力扣
题目：写一个 `RecentCounter` 类来计算特定时间范围内最近的请求。

解题思路

1. 在类中创建一个队列，用于保存最近请求；
2. ping时保存请求；
3. 判断队头请求时间是否比`t-3000`的时间少，如果是则出队，并继续判断，如果不是则返回队列长度。

```JavaScript
/** 解题思路
1. 在类中创建一个队列，用于保存最近请求；
2. ping时保存请求；
3. 判断队头请求时间是否比`t-3000`的时间少，如果是则出队，并继续判断，如果不是则返回队列长度。
 */
var RecentCounter = function() {
    this.q = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.q.push(t)
    while(this.q[0] < t - 3000) {
        this.q.shift()
    }
    return this.q.length
};

```