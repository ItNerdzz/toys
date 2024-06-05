import Swiper from 'swiper';
import { Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const introSwiper = document.querySelector('.intro__swiper');

const initIntroSwiper = () => {
  if (introSwiper) {
    new Swiper(introSwiper, {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 5,
      initialSlide: 1,
      // autoHeight: true,
      speed: 1000,
      watchOverflow: true,

      modules: [Pagination, Navigation],

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },

      navigation: {
        nextEl: '.intro__btn-prev',
        prevEl: '.intro__btn-next',
      },
    });
  }
};

export {initIntroSwiper};
