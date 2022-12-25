"use strict";

// 首頁_教練課程輪播
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
var tagSwiper = new Swiper(".tag-swiper", {
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 16,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 4,
      spaceBetween: 16
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 6,
      spaceBetween: 16
    }
  },
  autoplay: {
    delay: 2000
  }
}); // 千分位工具

function toThousands(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
//# sourceMappingURL=all.js.map
