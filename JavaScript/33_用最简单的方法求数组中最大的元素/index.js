const arr = [1, 23, 69, 120, 2, 42]

console.log(arr.reduce((max, val) => (max >= val ? max : val)))
console.log(Math.max.apply(null, arr))
console.log(Math.max(...arr))
