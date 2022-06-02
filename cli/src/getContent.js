const getFileList = require('./getFileList')
const fileList = getFileList('.')
function sort(arr) {}
let content = ''

/*
`
<details>
<summary><b style="display:inline-block">${title}</b></summary>
 <ul>
     <li><a href="${path}">${liName}</a></li>
 </ul>
</details>
`
 */
for (const title in fileList) {
  let _ = `
<details>
<summary><b style="display:inline-block">${title}</b></summary>
  <ul>`
  let itemList = fileList[title]
  itemList = itemList.sort((a, b) => {
    const aNum = parseInt(a.split('_')[0])
    const bNum = parseInt(b.split('_')[0])
    return aNum - bNum
  })
  for (let i = 0; i <= itemList.length - 1; i++) {
    const path = itemList[i]
    _ += `
    <li><a href="${title + '/' + path}">${path}</a></li>`
    if (i === itemList.length - 1) {
      _ += `
  </ul>
</details>
      `
      content += _
    }
    // console.log(itemList[i])
  }
}
module.exports = content
