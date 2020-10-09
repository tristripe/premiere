// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

import Swiper from "swiper";
import SwiperCore, {Navigation, Pagination} from 'swiper';
SwiperCore.use([Navigation, Pagination]);

let openingList = document.querySelector('.ampm-opening__wrapper');
let advantage = document.querySelector('.ampm-advantages__inner');
let tabsContainer = document.querySelectorAll('.ampm-tabs__container');
let tabsButtonWrapper = document.querySelector('.ampm-tabs__button-wrapper');
let tabsContainersMobile = document.querySelectorAll('.ampm-tabs__container.ampm-tabs__container--mobile');
let textSlideButtons = document.querySelectorAll('.ampm-text-slide__button');

if (openingList) {
  openingList = new Swiper(openingList, {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 15
      },

      480: {
        slidesPerView: 'auto',
        spaceBetween: 15
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 15
      },

      1280: {
        slidesPerView: 4,
        spaceBetween: 10
      }
    }
  });
}

if (advantage) {
  let firstButtons = document.querySelectorAll('.ampm-text-slide__button--first');
  let secondButtons = document.querySelectorAll('.ampm-text-slide__button--second');
  let thirdButtons = document.querySelectorAll('.ampm-text-slide__button--three');

  let menu = ['Скидки', 'Дизайн', 'Инновации'];

  advantage = new Swiper(advantage, {
    slidesPerView: 1,
    spaceBetween: 30,
  });

  let buttonMoveTo = function (elements, index) {
    elements.forEach(function(element) {
      element.addEventListener('click', function () {
        advantage.slideTo(index);
      })
    });
  }

  buttonMoveTo(firstButtons, 0);
  buttonMoveTo(secondButtons, 1);
  buttonMoveTo(thirdButtons, 2);
}

if (tabsButtonWrapper) {
  tabsButtonWrapper = new Swiper(tabsButtonWrapper, {
    navigation: {
      nextEl: '.swiper-button-next'
    },
    slidesPerView: 'auto',
    spaceBetween: 20,
  })
}

if (tabsContainersMobile) {
  let buttons = document.querySelectorAll('.ampm-tabs__button');

  for (let i = 0; i < tabsContainersMobile.length; i++) {

    let mobileContainer = tabsContainersMobile[i];
    mobileContainer = new Swiper(mobileContainer, {
      slidesPerView: 1,
      spaceBetween: 15,
      width: 250,
      loop: true
    });

    buttons[i].addEventListener('click', function (e) {
      for (let i = 0; i < tabsContainersMobile.length; i++) {
        let mobileContainer = tabsContainersMobile[i];
        mobileContainer.classList.remove('ampm-tabs__container--active');
      }
      buttons.forEach(element => element.classList.remove('ampm-tabs__button--active'));
      buttons[i].classList.add('ampm-tabs__button--active');
      tabsContainersMobile[i].classList.add('ampm-tabs__container--active');
      mobileContainer.update();
    })
  }
}

