const content = require('./getContent')

const fs = require('fs')
const path = require('path')

function readFile(name) {
  return fs.readFileSync(path.join(__dirname, '..', 'template', name), {
    encoding: 'utf8',
    flag: 'r',
  })
}

const header = readFile('header.txt')
const footer = readFile('footer.txt')

const readme = header + content + footer

try {
  fs.writeFileSync(path.join(__dirname, '..', '..', 'README.md'), readme)
  console.log('更新成功')
} catch (error) {
  console.log(error)
}
