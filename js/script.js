$(document).ready(function () {
  $(".info-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: 0,
    variableWidth: true,
    focusOnSelect: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1800,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
          focusOnSelect: false,
        },
      },
    ],
  });

  $(".info-slider2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: 0,
    variableWidth: true,
    focusOnSelect: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1800,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
          focusOnSelect: false,
        },
      },
    ],
  });

  $(".infrastructure-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    variableWidth: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1800,
  });

  $(".phone-number-input").inputmask({
    mask: "+7 (999) 999 - 99 - 99",
  });

  $(".drop-menu").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("is-active");
    $(".menu-wrap").toggleClass("open");
    $(".header").toggleClass("red");
    $("body, html").toggleClass("overflow");
  });

  $(".slider-for2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".slider-nav",
    focusOnSelect: true,
    prevArrow: $(".slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".slider-wrap .slider-navigation .slick-next"),
  });
  $(".slider-nav2").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  $(".slider-for3").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".slider-nav3",
    focusOnSelect: true,
    prevArrow: $(".slider-wrap2 .slider-navigation .slick-prev"),
    nextArrow: $(".slider-wrap2 .slider-navigation .slick-next"),
  });
  $(".slider-nav3").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider-for3",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 1,
    asNavFor: ".slider-nav",
    prevArrow: $(".planning-solutions .slider-navigation .slick-prev"),
    nextArrow: $(".planning-solutions .slider-navigation .slick-next"),
  });
  $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    initialSlide: 1, // Синхронизация со вторым слайдом
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          slidesToShow: 2,
          focusOnSelect: false,
          autoplay: true,
        },
      },
    ],
  });

  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  });

  $(".main-menu li a").smoothScroll({
    speed: 1000,
  });

  AOS.init();
});
