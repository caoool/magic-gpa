Router.route '/', ->
  @render 'main'

Router.route '/submit', ->
  @render 'submit'

Router.route '/result/:id', ->
  @render 'result'
