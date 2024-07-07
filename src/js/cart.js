import {handleOpenPopup} from "./popup.js";

const headerCartButton = document.querySelector('.header__cart-button');

const sideCart = document.querySelector('.popup.cart--side-cart');

const openSideCart = (evt) => {
  evt.preventDefault();
  handleOpenPopup(sideCart);
};

if (headerCartButton && sideCart) {
  headerCartButton.addEventListener('click', openSideCart)
};
