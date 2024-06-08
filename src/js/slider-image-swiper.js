import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const sliderImageSwiper = document.querySelector('.slider-image__swiper');

const initSliderImageSwiper = () => {
  if (sliderImageSwiper) {
    new Swiper(sliderImageSwiper, {
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

export {initSliderImageSwiper};
