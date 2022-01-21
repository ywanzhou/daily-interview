const swapString = str => {
  if (typeof str !== 'string') throw new TypeError('str not a string')
  let arr = str.split('')
  return arr
    .map(_str =>
      _str === _str.toLowerCase() ? _str.toUpperCase() : _str.toLowerCase(),
    )
    .join('')
}
console.log(swapString('AbC')) // aBc
