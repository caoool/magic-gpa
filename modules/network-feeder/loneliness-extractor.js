
var parser = require("../studentlife/studentlife-parser/studentlife-parser.js")
var fs = require('fs')

var stream = fs.createWriteStream('loneliness.txt')
var attributeList = [
  { 
    "file": "../studentlife/studentlife-data/LonelinessScale.csv",
    "max": 4,
    "choice": [ "Never", "Rarely", "Sometimes", "Often" ],
    "ignore": [
      "type",
      "1. I feel in tune with the people around me",
      "3. There is no one I can turn to",
      "5. I feel part of a group of friends",
      "10. There are people I feel close to",
      "11. I feel left out",
      "14. I feel isolated from others",
      "15. I can find companionship when I want it",
      "16. There are people who really understand me",
      "18. People are around me but not with me",
      "19. There are people I can talk to",
      "20. There are people I can turn to"
    ]
  }
]

stream.once('open', () => {
  parser(attributeList, (values, keys, uid) => {
    stream.write(uid.toString() + ' ' + values+ '\n')
  })
})
