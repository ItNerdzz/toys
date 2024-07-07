import '../scss/style.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {mobileVhFix} from './utils/mobile-vh-fix.js';
import {initModals} from './init-modals';
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

  mobileVhFix();

  // Modules
  // ---------------------------------

  initIntroSwiper();
  initAdvantagesSwiper();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {

    initModals();

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
