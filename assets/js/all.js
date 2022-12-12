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
}); // 千分位工具

function toThousands(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
//# sourceMappingURL=all.js.map
