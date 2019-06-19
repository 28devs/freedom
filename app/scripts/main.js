window.addEventListener("load", function () {

  //
  // Slider
  //

  const slider = new Glide(".glide", {
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
        peek: 40,
      },
      390: {
        perView: 1,
        gap: 5,
        peek: 60,
      },
      426: {
        perView: 1,
        gap: 5,
        peek: 80,
      },
      575: {
        perView: 2,
        gap: 5,
        peek: 60,
      },
      992: {
        perView: 3,
        gap: 10,
        peek: 0,
      },
      1200: {
        perView: 4,
        gap: 10,
        peek: 0,
      }
    }
  }).mount();

  document.querySelector(".glide__prev").addEventListener("click", () => slider.go("<"));
  document.querySelector(".glide__next").addEventListener("click", () => slider.go(">"));

  slider.on('run', function (move) {
    let activeSlide = document.querySelector(".glide__slide--active");
    let allSlides = document.querySelectorAll(".glide__slide");
    let index = slider.index;

    activeSlide.classList.remove("glide__slide--active");
    allSlides[index].classList.add("glide__slide--active");
  });


  //
  // Header burger btn
  //

  const burger = document.querySelector(".header__burger");

  burger.addEventListener("click", () => document.body.classList.toggle("mobile-menu-is-open"));


  //
  // Minify header when page scroll
  //

  const header = document.querySelector('.header');
  const bodyClass = document.body.classList;

  function headerScroll() {
    window.scrollY < 1 ? bodyClass.remove('header-is-sticky') : bodyClass.add('header-is-sticky');
  };

  headerScroll();
  window.onscroll = headerScroll;
});