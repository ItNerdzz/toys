const header = document.querySelector('.header');

const burgerButton = document.querySelector('.header__burger-button');



const toggleMenu = () => {
  if (header.classList.contains('header--menu-opened')) {
    document.body.classList.remove('locked');
    header.classList.remove('header--menu-opened');
  } else {
    document.body.classList.add('locked');
    header.classList.add('header--menu-opened');
  }

  closeSearchModal(true);
  searchForm.classList.remove('header__search-form--opened');

};

burgerButton.addEventListener('click', toggleMenu);

const searchButton = document.querySelector('.header__search-button');

const searchForm = document.querySelector('.header__search-form');

const toggleSearch = () => {
  searchForm.classList.toggle('header__search-form--opened');
  toggleSearchModal();
};

searchButton.addEventListener('click', toggleSearch);

const searchInput = document.querySelector('.search-form__input');
const searchModal = document.querySelector('.header__search-modal');
const searchModalCloseButtons = document.querySelectorAll('.search-modal__close--js');

const openSearchModal = () => {
  header.classList.add('header__search-modal--opened');
  searchModal.classList.add('search-modal--opened');
  document.body.classList.add('locked');
};

const closeSearchModal = (dontLock) => {
  header.classList.remove('header__search-modal--opened');
  searchModal.classList.remove('search-modal--opened');
  searchForm.classList.remove('header__search-form--opened');

  if (dontLock) {
    return;
  }

  document.body.classList.remove('locked');
};

const toggleSearchModal = () => {
  if (searchModal.classList.contains('search-modal--opened')) {
    closeSearchModal();
  } else {
    openSearchModal();
  }
};

if (searchInput && searchModal && searchModalCloseButtons) {
  searchInput.addEventListener('click', openSearchModal);

  searchModalCloseButtons.forEach(button => button.addEventListener('click', () => {
    closeSearchModal();
  }));
}


let scrollTimeout;

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }

  if (currentScrollY > 0) {
    scrollTimeout = setTimeout(() => {
      header.classList.add('header--scrolled');
    }, 100);
  } else {
    header.classList.remove('header--scrolled');
  }
};

handleScroll();

window.addEventListener('scroll', handleScroll);

