const TurndownService = require('turndown')
const fs = require('fs')
const fsPromises = fs.promises
const cheerio = require('cheerio')

const turndownService = new TurndownService()
const fileNameList = fs
  .readdirSync('./')
  .filter(x => x.endsWith('.htm'))
  .map(x => x.split('.')[0])

function changeHtmlToMd(fileName) {
  fsPromises.readFile(fileName + '.htm', 'utf-8').then(content => {
    const $ = cheerio.load(content)
    const $content = $('.article-content')
    const $imgs = $content.find('img.lazyload')

    $imgs.each((i, $img) => {
      const attribs = $img.attribs
      attribs.src = attribs['data-src']
      // $img.attr('src', $img.data('src'))
    })

    const html = $content.html()

    const mdStr = turndownService.turndown(html)
    fsPromises.writeFile(`./md/${fileName}.md`, mdStr).then(() => {
      console.log(`${fileName}.md转换成功`)
    })
  })
}

fileNameList.forEach(x => {
  changeHtmlToMd(x)
})

// changeHtmlToMd(`./15-从 V8 中看 JS 性能优化`)
