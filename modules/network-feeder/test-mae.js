var synaptic = require('synaptic');
var util = require('util');

var networkConfig = require('./object.json');
var trainingSet = require('./trainer.json');

var network = synaptic.Network.fromJSON(networkConfig);

var output = [];

trainingSet.forEach(
  (data) => 
    output.push( { neural: network.activate(data.input)[0] +  3,
                   actual: parseFloat(data.output) + 3 } ));


var mae = 0;

output.forEach(
  (data) =>
    console.log(
      util.format( '%d & %d & %d \\\\',
                   data.neural,
                   data.actual,
                   Math.abs(data.neural - data.actual)/4 )));

output.forEach( (data) => mae += Math.abs(data.neural - data.actual)/4 );

console.log( mae/output.length/4 );

