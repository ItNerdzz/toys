import '../scss/style.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './header.js';
import './popup.js';
import './callback.js';
import './cart.js';
import './add-to-cart.js';
import './modals-sale.js';
import './filter.js';

import {initIntroSwiper} from './intro-swiper';
import {initAdvantagesSwiper} from './advantages-swiper';
import {initSliderImageSwiper} from './slider-image-swiper';
import {initСertificatesSwiper} from './certificates-swiper';
import {initCooperationSwiper} from './cooperation-swiper';
import {initPopularSwiperMobile} from './popular-swiper';
import {initCardProductSwiper} from './card-product-swiper';
import {initSliderCardSwiper} from './slider-card-swiper';
import {initGratitudeSwiper} from './gratitude-swiper';
import {initTabs} from './tabs';

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------


  // Modules
  // ---------------------------------

  initIntroSwiper();
  initAdvantagesSwiper();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initAdvantagesSwiper();
    initSliderImageSwiper();
    initСertificatesSwiper();
    initCooperationSwiper();
    initPopularSwiperMobile();
    initCardProductSwiper();
    initSliderCardSwiper();
    initGratitudeSwiper();
    initTabs();
  });
});
