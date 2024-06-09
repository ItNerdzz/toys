import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';


const slidersImageSwiper = document.querySelectorAll('.slider-image__swiper');

const initSliderImageSwiper = () => {

  slidersImageSwiper.forEach((sliderImageSwiper) => {

    if (sliderImageSwiper) {

      new Swiper(sliderImageSwiper, {
        direction: 'horizontal',
        slidesPerView: 1.698, // демонстрация количества слайдов
        spaceBetween: 16, // расстояние между слайдами
        initialSlide: 0, // с какого слайда начать показ
        autoHeight: true, // автовысота
        speed: 500, // скорость перелистывания
        watchOverflow: true, // отключает если недостаок слайдов

        //Адаптив Ширина экрана
        breakpoints: {
          720: {
            slidesPerView: 2.914,
          },
          1024: {
            slidesPerView: 4.308,
          },
          1440: {
            slidesPerView: 5.931,
          }
        },


        modules: [Navigation],

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  });
};

export {initSliderImageSwiper};
