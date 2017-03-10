
var parser = require("../studentlife/studentlife-parser/studentlife-parser.js")
var fs = require('fs')

var stream = fs.createWriteStream('stress.txt')
var attributeList = [
  { 
    "file": "../studentlife/studentlife-data/PerceivedStressScale.csv",
    "max": 5,
    "choice": [ "Never", "Almost never", "Sometime", "Fairly often", "Very often" ],
    "ignore": [
      "type",
      "1. In the last month, how often have you been upset because of something that happened unexpectedly?",
      "2. In the last month, how often have you felt that you were unable to control the important things in your life?",
      "5. In the last month, how often have you felt that things were going your way?",
      "7. In the last month, how often have you been able to control irritations in your life?",
      "8. In the last month, how often have you felt that you were on top of things?"
    ]
  }
]

stream.once('open', () => {
  parser(attributeList, (values, keys, uid) => {
    stream.write(uid.toString() + ' ' + values+ '\n')
  })
})