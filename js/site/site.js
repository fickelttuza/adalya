

var swiper = new Swiper(".SliderSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 1000, 
  pagination: {
    el: ".swiper-pagination",
  },
});
var swiper = new Swiper(".productSwiper", {
  slidesPerView: 4,
  spaceBetween: 5,
  navigation: {
    nextEl: ".product-next",
    prevEl: ".product-prev",
  },
  breakpoints: {
    0:{
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4
    },
    1400: {
      slidesPerView: 4
    }
  }
});
var swiper = new Swiper(".referencesSwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: ".references-next",
    prevEl: ".references-prev",
  },
  breakpoints: {
    0:{
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1400: {
      slidesPerView: 3
    }
  }
});
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,

  thumbs: {
    swiper: swiper,
  },
});


