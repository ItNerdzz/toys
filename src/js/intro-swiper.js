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
      slidesPerView: 1, // демонстрация количества слайдов
      spaceBetween: 5, // расстояние между слайдами
      initialSlide: 1, // с какого слайда начать показ
      // autoHeight: true, // автовысота
      speed: 500, // скорость перелистывания
      watchOverflow: true, // отключает если недостаок слайдов

      modules: [Pagination, Navigation],

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true, // динамический вид пагинации
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
};

export {initIntroSwiper};
