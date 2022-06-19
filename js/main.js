$(function () {

  var mixer = mixitup('.directions__list')

  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })

  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
  })

  $('.slider-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })
  $('.slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })

  $('.testi__slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.testi__dots'),
  })
  $('.testi__next').on('click', function (e) {
    e.preventDefault()
    $('.testi__slider').slick('slickNext')
  })
  $('.testi__prev').on('click', function (e) {
    e.preventDefault()
    $('.testi__slider').slick('slickPrev')
  })


  $('.course__acc-link').on('click', function(e){
    e.preventDefault()
    $(this).toggleClass('course__acc-link--active')
    $(this).children('.course__acc-text').slideToggle()
  })



})



