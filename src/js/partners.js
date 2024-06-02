import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const partnersSwiper = document.querySelector('.partners__swiper');

if (partnersSwiper) {
  new Swiper(partnersSwiper, {
    slidesPerView: 'auto',
    modules: [Navigation],
    spaceBetween: 20,
    navigation: {
      nextEl: '.features__swiper-next',
      prevEl: '.features__swiper-prev',
    },
  });
}
