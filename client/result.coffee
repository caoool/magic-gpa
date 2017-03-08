Template.result.events
  'click #accurate': (e) ->
    Surveys.update Router.current().params.id,
      $set: accurate: true

  'click #not_accurate': (e) ->
    Surveys.update Router.current().params.id,
      $set: accurate: false

  'click #share': (e) ->
    Surveys.update Router.current().params.id,
      $set: share: true

Template.result.helpers
  student: ->
    Surveys.findOne _id: Router.current().params.id