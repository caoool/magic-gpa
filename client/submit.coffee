Dragdealer = require('dragdealer').Dragdealer

# icon = $('.icon')
# widget = $('.slide')
# steps = 5
# s1 = new Dragdealer('q3',
#   horizontal: true
#   steps: steps
#   speed: 0.3
#   loose: false
#   animationCallback: (x, y) ->
#     percent = parseInt(steps * x * 100, 10)
#     icon.css 'background-position-y': 750 * x * 9 / 10 + 75 + 'px'
#     return
# ).setStep(5)

# openWidget = ->
#   $('.button').click ->
#     currentSlide = $('.active-slide')
#     nextSlide = currentSlide.next()
#     currentSlide.fadeOut(600).removeClass 'active-slide'
#     nextSlide.fadeIn(600).addClass 'active-slide'
#     return
#   return

Template.submit.onRendered ->
  # openWidget()
  new Dragdealer 'q3'