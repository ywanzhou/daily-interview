const arr = [1, 2, 1, "1", 17, false, true, true, false, "true", "a"]
const unique = arr => {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    // 只有新数组不存在时才push
    if (res.indexOf(arr[i]) === -1) res.push(arr[i])
  }
  return res
}

console.log(unique(arr)) // [(1, 2, "1", 17, false, true, "true", "a")]
