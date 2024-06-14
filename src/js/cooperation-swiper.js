import Swiper from 'swiper';


const cooperationSwiper = document.querySelector('.cooperation__swiper');

const initCooperationSwiper = () => {
  if (cooperationSwiper) {
    new Swiper(cooperationSwiper, {
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
          slidesPerView: 2.485,
        },
        1024: {
          spaceBetween: 18,
          slidesPerView: 3.595,
        },
        1440: {
          spaceBetween: 21,
          slidesPerView: 5,
        }
      },
    });
  }
};

export {initCooperationSwiper};
