synaptic = require 'synaptic'
Neuron = synaptic.Neuron
Layer = synaptic.Layer
Network = synaptic.Network
Trainer = synaptic.Trainer
Architect = synaptic.Architect
network = new Architect.Perceptron 2, 3, 1
trainer = new Trainer network
trainingSet = [
  {
    input: [1,0]
    output: [1]
  }
  {
    input: [0,1]
    output: [0]
  }
]
trainer.train trainingSet

survey =
  name: null
  q1: null
  q2: 0

nullChecker = (obj) ->
  for k, v of obj
    return true if v == null
  return false

Template.submit.onRendered ->
  Dragdealer = require('dragdealer').Dragdealer
  new Dragdealer 'q2',
    horizontal: true
    steps: 6
    speed: 0.3
    loose: false
    callback: (x, y) ->
      survey.q2 = x

Template.submit.events
  'change #name': (e) ->
    survey.name = e.target.value

  'click .q1': (e) ->
    survey.q1 = Number(e.target.value)

  'click #submit': (e) ->
    e.preventDefault()
    if nullChecker(survey)
      toastr.error 'Please fill all questions', 'Missing inputs'
    else
      gpa = network.activate([survey.q1, survey.q2])
      gpa = parseFloat(gpa).toFixed 3
      survey.gpa = parseFloat(gpa) + 3
      id = Surveys.insert survey
      url = '/result/' + id
      Router.go url