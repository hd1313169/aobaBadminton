"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
var swiper = new Swiper(".coachCard-swiper", {
  breakpoints: {
    1: {
      slidesPerView: 1.25,
      spaceBetween: 10
    },
    576: {
      slidesPerView: 2.25,
      spaceBetween: 10
    },
    880: {
      slidesPerView: 3.5,
      spaceBetween: 15
    },
    1200: {
      slidesPerView: 4.5,
      spaceBetween: 20
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
//# sourceMappingURL=all.js.map
