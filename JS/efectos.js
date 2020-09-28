$(document).ready(function () {
  //EFECTO MENU
  $('.menu a').each(function (index, elemento) {
    $(this).css({
      top: '-200px'
    })
    $(this).animate(
      {
        top: '0'
      },
      2000 + index * 500
    )
  })

  //EFECTO HEADER
  if ($(window).width() > 800) {
    $('header .textos').css({
      opacity: 0,
      marginTop: 0
    })
    $('header .textos').animate(
      {
        opacity: 1,
        marginTop: '-52px'
      },
      1300
    )
  }

  //---------- SCROLL ELEMENTOS MENU

  var acercaDe = $('#about').offset().top,
    menu = $('#platillos').offset().top,
    galeria = $('#galeria').offset().top,
    location = $('#location').offset().top

  $('#btn-about').on('click', function () {
    $('html, body').animate({
      scrollTop: acercaDe + 100
    })
  })
  $('#btn-menu').on('click', function () {
    $('html, body').animate({
      scrollTop: menu
    })
  })

  $('#btn-gallery').on('click', function () {
    $('html, body').animate({
      scrollTop: galeria
    })
  })

  $('#btn-gps').on('click', function () {
    $('html, body').animate({
      scrollTop: location
    })
  })
})
