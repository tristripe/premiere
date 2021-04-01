// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

import Swiper from "swiper";
import SwiperCore, {Navigation, Pagination, Thumbs} from 'swiper';
SwiperCore.use([Navigation, Pagination, Thumbs]);


const mainSwiper = new Swiper('.main-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
})

const subSwiper = new Swiper('.sub-slider__slider', {
  slidesPerView: 1,
  spaceBetween: 20
})
