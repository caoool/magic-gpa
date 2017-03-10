

var csv = require("fast-csv");
var fs = require("fs");

var csvOptions = { "headers": true };


function handlerConstructor(callback, attribute) {
  var dataHandler = function(data) {
    var keys = [];
    var values = [];
    var uid = data["uid"];
    var ignore = attribute["ignore"] ? attribute["ignore"] : [];
    if(attribute["choice"] != null)
      Object.keys(data).forEach( (key) => {
        value = attribute["choice"].indexOf(data[key]);
        data[key] = value === -1 ? data[key] : value; });
    Object.keys(data).forEach( (key) => {
      value = parseFloat(data[key]) / attribute["max"];
      value = isNaN(value) ? data[key] : value;
      if(key != "uid" && ignore.indexOf(key) === -1) {
        keys.push(key);
        values.push(value);
      } });
    callback(values, keys, uid);
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

