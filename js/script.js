const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', () => {
  searchForm.classList.toggle('active');
});

let loginForm = document.querySelector('.login-form-container');
const loginBtn = document.querySelector('#login-btn');
const closeBtn = document.querySelector('#close-login-btn');

loginBtn.addEventListener('click', () => {
  loginForm.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  loginForm.classList.remove('active');
});

window.addEventListener('scroll', () => {
  searchForm.classList.remove('active');
  if (window.scrollY > 80) {
    document.querySelector('.header .header__2').classList.add('active');
  } else {
    document.querySelector('.header .header__2').classList.remove('active');
  }
});

window.addEventListener('load', () => {
  if (window.scrollY > 80) {
    document.querySelector('.header .header__2').classList.add('active');
  } else {
    document.querySelector('.header .header__2').classList.remove('active');
  }
});

var swiper = new Swiper('.books-slider', {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper('.featured-slider', {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper('.arrivals-slider', {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper('.reviews-slider', {
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper('.blogs-slider', {
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
