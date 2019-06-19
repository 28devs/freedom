"use strict";

window.addEventListener("load", function () {
  //
  // Slider
  //
  var slider = new Glide(".glide", {
    animationDuration: 400,
    bound: true,
    perTouch: 5,
    perView: 5,
    gap: 10,
    peek: 0,
    breakpoints: {
      350: {
        perView: 1,
        gap: 5,
        peek: 40
      },
      390: {
        perView: 1,
        gap: 5,
        peek: 60
      },
      426: {
        perView: 1,
        gap: 5,
        peek: 80
      },
      575: {
        perView: 2,
        gap: 5,
        peek: 60
      },
      992: {
        perView: 3,
        gap: 10,
        peek: 0
      },
      1200: {
        perView: 4,
        gap: 10,
        peek: 0
      }
    }
  }).mount();
  document.querySelector(".glide__prev").addEventListener("click", function () {
    return slider.go("<");
  });
  document.querySelector(".glide__next").addEventListener("click", function () {
    return slider.go(">");
  });
  slider.on('run', function (move) {
    var activeSlide = document.querySelector(".glide__slide--active");
    var allSlides = document.querySelectorAll(".glide__slide");
    var index = slider.index;
    activeSlide.classList.remove("glide__slide--active");
    allSlides[index].classList.add("glide__slide--active");
  }); //
  // Header burger btn
  //

  var burger = document.querySelector(".header__burger");
  burger.addEventListener("click", function () {
    return document.body.classList.toggle("mobile-menu-is-open");
  }); //
  // Minify header when page scroll
  //

  var header = document.querySelector('.header');
  var bodyClass = document.body.classList;

  function headerScroll() {
    window.scrollY < 1 ? bodyClass.remove('header-is-sticky') : bodyClass.add('header-is-sticky');
  }

  ;
  headerScroll();
  window.onscroll = headerScroll;
});