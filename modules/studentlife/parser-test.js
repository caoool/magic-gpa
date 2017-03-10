
var parser = require("./studentlife-parser/studentlife-parser.js");
var attributeList = require("./attribute.js");

var callback = (values, keys, uid) => console.log(values, keys, uid);

parser(attributeList, callback)


