function fn(value) {
  console.log(arguments instanceof Array)
  console.log(arguments.length)
  console.log(value)
}

fn(1, 2, 3)
