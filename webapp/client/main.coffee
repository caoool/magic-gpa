Template.main.onRendered ->
  $('#qrcode').qrcode
    text: Meteor.absoluteUrl() + 'submit'

Template.main.events
  'click #clear': (e) ->
    Meteor.call 'surveys.drop'

  'click #turbo': (e) ->
    console.log 'haha'
    Surveys.find().collection.update {},
      $set:
        gpa: 4.0
        share: true
        accurate: true
    , multi: true

Template.main.helpers
  surveys: ->
    Surveys.find()