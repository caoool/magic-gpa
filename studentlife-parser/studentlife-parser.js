

var csv = require("fast-csv");
var fs = require("fs");

var csvOptions = { "headers": true };


function handlerConstructor(callback, attribute) {
  var dataHandler = function(data) {
    if(attribute["choice"] != null)
      Object.keys(data).forEach( (key) => {
        value = attribute["choice"].indexOf(data[key]);
        data[key] = value === -1 ? data[key] : value; });
    Object.keys(data).forEach( (key) => {
      value = parseFloat(data[key]);
      data[key] = isNaN(value) ? data[key] : value; });
    callback(data);
  };
  return dataHandler;
}

var main = (attributeList, callback) =>
  attributeList
    .forEach( (attribute) =>
      fs.createReadStream(attribute["file"])
        .pipe(csv.parse(csvOptions)
                 .on("data", handlerConstructor(callback, attribute))) );


module.exports = main;

