// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

import Swiper from "swiper";

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

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },

      480: {
        slidesPerView: 2,
        spaceBetween: 15
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 15
      },

      1280: {
        slidesPerView: 4
      }
    }
  });
}

if (advantage) {
  let firstButtons = document.querySelectorAll('.ampm-text-slide__button--first');
  let secondButtons = document.querySelectorAll('.ampm-text-slide__button--second');
  let thirdButtons = document.querySelectorAll('.ampm-text-slide__button--three');

  let menu = ['1', '2', '3'];

  advantage = new Swiper(advantage, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
    },
    slidesPerView: 1,
    spaceBetween: 30
  });

  for (let i = 0; i < textSlideButtons.length; i++) {
    textSlideButtons[i].addEventListener('click', function () {
      textSlideButtons.forEach(element => element.classList.remove('ampm-text-slide__button--active'));
    })
  }

  let buttonMoveTo = function (elements, index) {
    elements.forEach(function(element) {
      element.addEventListener('click', function () {
        advantage.slideTo(index);
        elements.forEach(function(el) {
          el.classList.add('ampm-text-slide__button--active');
        })
      })
    });
  }

  buttonMoveTo(firstButtons, 0);
  buttonMoveTo(secondButtons, 1);
  buttonMoveTo(thirdButtons, 2);
}
/*
if (tabsContainer) {
  let radioButtons = document.querySelector('.ampm-tabs__wrapper');

  for (let i = 0; i < tabsContainer.length; i++) {
    let container = tabsContainer[i];
    container = new Swiper(container, {
      slidesPerView: 1,
      spaceBetween: 50,
    });

    radioButtons.addEventListener('click', function () {
      container.update();
    })
  }
}
 */

if (tabsButtonWrapper) {
  tabsButtonWrapper = new Swiper(tabsButtonWrapper, {
    slidesPerView: 3,
    spaceBetween: 5
  })
}

if (tabsContainersMobile) {
  let buttons = document.querySelectorAll('.ampm-tabs__button');

  for (let i = 0; i < tabsContainersMobile.length; i++) {

    let mobileContainer = tabsContainersMobile[i];
    mobileContainer = new Swiper(mobileContainer, {
      slidesPerView: 'auto',
      spaceBetween: 30,
    });

    buttons[i].addEventListener('click', function (e) {
      for (let i = 0; i < tabsContainersMobile.length; i++) {
        let mobileContainer = tabsContainersMobile[i];
        mobileContainer.classList.remove('ampm-tabs__container--active');
      }
      tabsContainersMobile[i].classList.add('ampm-tabs__container--active');
      mobileContainer.update();
    })
  }
}

