$(document).ready(function () {
  $(window).scroll(function () {
    var windoww = $(window).width()

    if (windoww > 800) {
      var scroll = $(window).scrollTop()

      $('header .textos').css({
        transform: 'translate(0px, ' + scroll / 2 + '%)'
      })
      $('.about article').css({
        transform: 'translate(0px, -' + scroll / 1.75 + '%)'
      })
    }
  })
  $(window).resize(function () {
    var windoww = $(window).width()
    if (windoww < 800) {
      $('.about article').css({
        transform: 'translate(0px, 0px)'
      })
    }
  })
  $('.blink').animate({ opacity: 0 }, 200, 'linear', function () {
    $(this).animate({ opacity: 1 }, 200)
  })

  $(window).scroll(function () {
    var windoww = $(window).width()
    var scroll = $(window).scrollTop()

    if (windoww > 800) {
      $('.about .container .foto').css({
        transform: 'translate(0px, -' + scroll / 6 + '%)'
      })
    }
  })
})
