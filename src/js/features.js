import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const featuresSwiper = document.querySelector('.features__swiper');

if (featuresSwiper) {
  new Swiper(featuresSwiper, {
    slidesPerView: 'auto',
    modules: [Navigation],
    spaceBetween: 16,
    navigation: {
      nextEl: '.features__swiper-next',
      prevEl: '.features__swiper-prev',
    },
  });
}
