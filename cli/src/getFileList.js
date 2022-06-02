var fs = require('fs')
var join = require('path').join
const exclude = ['.git', 'cli']

module.exports = function getJsonFiles(jsonPath) {
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
        jsonFiles[path].push(item)
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
