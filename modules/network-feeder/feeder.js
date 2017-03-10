var synaptic = require('synaptic')
var Neuron = synaptic.Neuron
var Layer = synaptic.Layer
var Network = synaptic.Network
var Trainer = synaptic.Trainer
var Architect = synaptic.Architect

var fs = require('fs')

var gpas = fs.readFileSync('gpas.txt').toString().split('\n')
var lonelinesses = fs.readFileSync('loneliness.txt').toString().split('\n')
var stresses = fs.readFileSync('stress.txt').toString().split('\n')

var entries = {}

for (i in gpas) {
  line = gpas[i].split(' ')
  if (line[0] != '') {
    entries[line[0]] = [[], line[1]]
  }
}

for (i in lonelinesses) {
  line = lonelinesses[i].split(' ')
  if (line[0] != '') {
    scores = line[1].split(',')
    if (line[0] in entries) {
      entries[line[0]][0] = scores
    }
  }
}

for (i in stresses) {
  line = stresses[i].split(' ')
  if (line[0] != '') {
    scores = line[1].split(',')
    if (line[0] in entries) {
      if (entries[line[0]][0].length == 9) {
        entries[line[0]][0] = entries[line[0]][0].concat(scores)
      }
    }
  }
}

trainingSet = []
for (i in entries) {
  if (entries[i][0].length == 14) {
    data = {
      'input': entries[i][0],
      'output': entries[i][1]
    }
    trainingSet.push(data)
  }
}

network = new Architect.Perceptron(14, 10, 1)
network.trainer.train(trainingSet)
json = network.toJSON()

fs.writeFile("./object.json", JSON.stringify(json, null, 4), (err) => {
  if (err) {
    console.error(err);
    return;
  };
  console.log("File has been created");
});
