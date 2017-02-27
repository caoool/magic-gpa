Router.route '/', ->
  @render 'main'

Router.route '/submit', ->
  @render 'submit'