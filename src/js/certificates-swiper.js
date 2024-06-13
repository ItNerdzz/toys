import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';


const certificatesSwiper = document.querySelector('.certificates__image-swiper');

const initСertificatesSwiper = () => {

  if (certificatesSwiper) {

    new Swiper(certificatesSwiper, {
      direction: 'horizontal',
      slidesPerView: 1, // демонстрация количества слайдов
      spaceBetween: 5, // расстояние между слайдами
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

export {initСertificatesSwiper};
