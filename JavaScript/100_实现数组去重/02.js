const arr = [1, 2, 1, "1", 17, false, true, true, false, "true", "a"]
console.log(Array.from(new Set(arr))) // [(1, 2, "1", 17, false, true, "true", "a")]
