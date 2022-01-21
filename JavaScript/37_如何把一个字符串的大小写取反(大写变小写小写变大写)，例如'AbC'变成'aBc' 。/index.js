const swapString = str => {
  if (typeof str !== 'string') throw new TypeError('str not a string')
  return str
    .split('')
    .map(_str =>
      _str === _str.toLowerCase() ? _str.toUpperCase() : _str.toLowerCase(),
    )
    .join('')
}
console.log(swapString('AbC')) // aBc
