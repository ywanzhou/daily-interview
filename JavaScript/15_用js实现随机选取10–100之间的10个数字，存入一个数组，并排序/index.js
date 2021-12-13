let arr = []
function getRandom(start, end) {
  let choice = end - start + 1
  return Math.floor(Math.random() * choice + start)
}
for (let i = 0; i < 10; i++) {
  arr.push(getRandom(10, 100))
}
arr.sort()
