Template.trainer.onRendered ->
  $('#json').text JSON.stringify(network.toJSON(), undefined, 2)