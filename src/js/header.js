const header = document.querySelector('.header');

const burgerButton = document.querySelector('.header__burger-button');

const toggleMenu = () => {
  document.body.classList.toggle('locked');
  header.classList.toggle('header--menu-opened');
};

burgerButton.addEventListener('click', toggleMenu);

const serachButton = document.querySelector('.header__search-button');

const searchForm = document.querySelector('.header__search-form');

const toggleSearch = () => {
  searchForm.classList.toggle('header__search-form--opened');
};

serachButton.addEventListener('click', toggleSearch);
