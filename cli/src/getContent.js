const getFileList = require('./getFileList')
const path = require('path')
const fileList = getFileList()
let content = ''

/*
`
<details>
<summary>${title}</summary>
 <ul>
     <li><a href="${path}">${liName}</a></li>
 </ul>
</details>
`
 */
for (const title in fileList) {
  let _ = `
<details>
<summary><b style="font-weight:600;font-size:1.23rem;display:inline-block;margin:8px 0;">${title}</b></summary>
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
