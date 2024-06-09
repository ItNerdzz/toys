import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';


const advantagesSwiper = document.querySelector('.advantages__swiper');

const initAdvantagesSwiper = () => {
  if (advantagesSwiper) {
    new Swiper(advantagesSwiper, {
      direction: 'horizontal',
      slidesPerView: 1.155, // демонстрация количества слайдов
      spaceBetween: 16, // расстояние между слайдами
      initialSlide: 0, // с какого слайда начать показ
      autoHeight: true, // автовысота
      speed: 500, // скорость перелистывания
      watchOverflow: true, // отключает если недостаок слайдов

      //Адаптив Ширина экрана
      breakpoints: {
        720: {
          slidesPerView: 1.625,
        },
        1024: {
          slidesPerView: 2.308,
        },
        1440: {
          slidesPerView: 3.308,
        }
      },


      modules: [Navigation],

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
};

export {initAdvantagesSwiper};
