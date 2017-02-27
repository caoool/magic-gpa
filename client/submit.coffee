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
    survey.q1 = e.target.value

  'click #submit': (e) ->
    e.preventDefault()
    if nullChecker(survey)
      toastr.error 'Please fill all questions', 'Missing inputs'
    else
      Surveys.insert survey
      Router.go '/'