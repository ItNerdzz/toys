import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';


const gratitudeSwipers = document.querySelectorAll('.gratitude__image-swiper');

const initGratitudeSwiper = () => {

  if (gratitudeSwipers) {
    gratitudeSwipers.forEach((gratitudeSwiper) => {
      new Swiper(gratitudeSwiper, {
        direction: 'horizontal',
        slidesPerView: 1.448, // демонстрация количества слайдов
        spaceBetween: 16, // расстояние между слайдами
        initialSlide: 0, // с какого слайда начать показ
        autoHeight: true, // автовысота
        speed: 500, // скорость перелистывания
        watchOverflow: true, // отключает если недостаок слайдов

        //Адаптив Ширина экрана
        breakpoints: {
          720: {
            slidesPerView: 2.397,
          },
          1024: {
            slidesPerView: 3.486,
          },
          1440: {
            slidesPerView: 4.879,
          }
        },


        modules: [Navigation],

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    });
  }
};

export {initGratitudeSwiper};
