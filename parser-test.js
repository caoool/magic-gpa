
var parser = require("./studentlife-parser/studentlife-parser.js");
var attributeList = require("./attribute.js");

var callback = (data) => console.log(data);

parser(attributeList, callback)


