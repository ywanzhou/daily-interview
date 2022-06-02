const fs = require('fs')
const join = require('path').join
const sep = require('path').sep
const exclude = ['.git', 'cli']
const p = join(__dirname, '..', '..')
module.exports = function getJsonFiles(jsonPath = p) {
  let jsonFiles = {}
  function findJsonFile(path, flag) {
    let files = fs.readdirSync(path)
    for (const item of files) {
      // 排除不需要的文件
      if (exclude.indexOf(item) !== -1) {
        continue
      }
      if (!flag) {
        jsonFiles[item] = []
      }
      let fPath = join(path, item)
      let stat = fs.statSync(fPath)
      if (flag) {
        const p = path.split(sep).at(-1)
        jsonFiles[p].push(item)
        continue
      }
      // 递归调用
      if (stat.isDirectory() === true) {
        findJsonFile(fPath, true)
      }
    }
  }
  findJsonFile(jsonPath)
  return jsonFiles
}

// console.log(getJsonFiles('.'))
