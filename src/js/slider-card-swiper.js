import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';


const slidersCardSwiper = document.querySelectorAll('.slider-card__swiper');

const initSliderCardSwiper = () => {

  slidersCardSwiper.forEach((sliderCardSwiper) => {

    if (sliderCardSwiper) {

      new Swiper(sliderCardSwiper, {
        direction: 'horizontal',
        slidesPerView: 1.4485, // демонстрация количества слайдов
        spaceBetween: 16, // расстояние между слайдами
        initialSlide: 0, // с какого слайда начать показ
        autoHeight: true, // автовысота
        speed: 500, // скорость перелистывания
        watchOverflow: true, // отключает если недостаок слайдов

        //Адаптив Ширина экрана
        breakpoints: {
          720: {
            slidesPerView: 2.485,
          },
          1024: {
            slidesPerView: 3.308,
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
    }
  });
};

export {initSliderCardSwiper};
