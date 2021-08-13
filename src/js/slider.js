import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    slideToClickedSlide: true,
    watchOverflow: true,

    autoplay: {
        delay: 2000,
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1170: {
          slidesPerView: 3,
          spaceBetween: 40
        }
    }
});