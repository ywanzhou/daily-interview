var a = "w"
let obj = {
  a: "o",
  print: function () {
    console.log(this.a)
  },
  print2: () => {
    console.log(this.a)
  },
}
let p = obj.print
let p2 = obj.print2
obj.print()
obj.print2()
p()
p2()
