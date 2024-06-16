import Swiper from 'swiper';


const popularSwiper = document.querySelector('.popular__swiper');
const breakpoint = window.matchMedia('(min-width: 1024px)'); // ширина экрана для инициализации слайдера

let swiper = null;

const initPopularSwiper = () => {

  if (!swiper) {
    swiper = new Swiper(popularSwiper, {
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
        }
      },
    });
  }
};

// удаляет инициализацию Свайпера если он инициализирован
const destroyPopularSwiper = () => {
  if (swiper) {
    swiper.destroy();
    swiper = null;
  }
};

// запускает и удаляет инициализацию Свапера согласно брейкпонта 1024
const initPopularSwiperMobile = () => {
  if (popularSwiper) { // проверка на наличие элемента
    const breakpointChecker = () => { // определяет работу методов при прохождении точки брейкпойнта

      if (!breakpoint.matches) {
        initPopularSwiper(); // запуск свайпера
      } else {
        destroyPopularSwiper(); // удаление свайпера
      }
    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker(); // запускает функциию breakpointChecker
  }
  return;
};

export {initPopularSwiperMobile};
