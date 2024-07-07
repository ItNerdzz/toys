import '../scss/style.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './header.js';
import './popup.js';
import './callback.js';
import './cart.js';
import './add-to-cart.js';

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

initIntroSwiper();
initAdvantagesSwiper();
initSliderImageSwiper();
initСertificatesSwiper();
initCooperationSwiper();
initPopularSwiperMobile();
initCardProductSwiper();
initSliderCardSwiper();
initGratitudeSwiper();
initTabs();
