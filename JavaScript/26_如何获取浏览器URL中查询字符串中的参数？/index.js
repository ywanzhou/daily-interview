function getQueryString() {
  const href = window.location.href
  const args = href.split('?')
  if (!args.length) {
    // 没有参数
    return ''
  }
  const list = args[1].split('&')
  const obj = {}
  list.forEach(item => {
    let arr = item.split('=')
    obj[arr[0]] = arr[1]
  })
  return obj
}
