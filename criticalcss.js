const penthouse = require('penthouse')
const fs = require('fs')

penthouse({
  url: 'http://127.0.0.1:4040/',
  // cssString: ''
  css: 'css/styles.min.css',
  screenshots: {
    basePath: 'homepage',
    type: 'jpeg',
    quality: 20
  }
})
.then(critcalCss => {
  fs.writeFileSync('css/critical.css', critcalCss);
})
