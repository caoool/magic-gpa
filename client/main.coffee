Template.main.onRendered ->
  $('#qrcode').qrcode
    text: Meteor.absoluteUrl() + '/submit'

Template.main.events
  'click #clear': (e) ->
    Meteor.call 'surveys.drop'

Template.main.helpers
  surveys: ->
    Surveys.find()