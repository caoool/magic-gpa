
var parser = require("../studentlife/studentlife-parser/studentlife-parser.js")
var fs = require('fs')

var stream = fs.createWriteStream('gpas.txt')
var attributeList = [
  { 
    "file": "../studentlife/studentlife-data/grades.csv",
    "max": 4 
  }
]

stream.once('open', () => {
  parser(attributeList, (values, keys, uid) => {
    stream.write(uid.toString() + ' ' + values[1] + '\n')
  })
})
