const mySetInterval = (callback, wait) => {
  let timer = {
    flag: true,
    clear() {
      this.flag = false
    },
  }
  ;(function f() {
    callback()
    timer.flag && setTimeout(f, wait)
  })()
  return timer
}
