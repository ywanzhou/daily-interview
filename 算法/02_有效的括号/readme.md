> 日期：2022/06/07
分类：算法、力扣
题目：给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串 `s` ，判断字符串是否有效。

暴力解法

```JavaScript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) return false

    const stack = []

    for(let i = 0; i<s.length; i++) {
        const c = s[i] // 记录当前项
        if (c === '(' || c === '[' || c==='{') {
            stack.push(c)
        } else {
            const t = stack[stack.length - 1] // 获取栈顶元素
            if (
                (t === '(' && c === ')') ||
                (t === '[' && c === ']') ||
                (t === '{' && c === '}') 
            ) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    // 如果为0表示全部匹配，有剩余则表示不匹配
    return stack.length === 0
};
```