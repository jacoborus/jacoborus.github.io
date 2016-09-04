'use strict'

const pug = require('pug')
const fs = require('fs')

const data = require('../data.json')
const html = pug.compileFile('src/index.pug')(data)

fs.writeFile('index.html', html, (err) => {
  if (err) throw err
  else console.log('ok')
})
