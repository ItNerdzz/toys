import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';


const sliderCardProduct = document.querySelector('.card-product__image-swiper');

const initCardProductSwiper = () => {

  if (sliderCardProduct) {

    new Swiper(sliderCardProduct, {
      direction: 'horizontal',
      slidesPerView: 1, // демонстрация количества слайдов
      spaceBetween: 16, // расстояние между слайдами
      initialSlide: 0, // с какого слайда начать показ
      autoHeight: true, // автовысота
      speed: 500, // скорость перелистывания
      watchOverflow: true, // отключает если недостаок слайдов

      modules: [Navigation],

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
};

export {initCardProductSwiper};
