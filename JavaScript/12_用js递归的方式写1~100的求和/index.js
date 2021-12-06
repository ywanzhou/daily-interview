function num(n) {
  if (n == 1) return 1
  return num(n - 1) + n
}
let s = num(100)
console.log('sum', s) // sum 5050
