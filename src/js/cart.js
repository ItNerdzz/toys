import {handleOpenPopup} from "./popup.js";

const headerCartButton = document.querySelector('.header__cart-button');

const sideCart = document.querySelector('.popup.cart--side-cart');

const sideCartClose = sideCart.querySelector('.popup__close');

const openSideCart = (evt) => {
  evt.preventDefault();
  handleOpenPopup(sideCart);
};

const setCartToInitialVisual = () => {
  const cartList = sideCart.querySelector('.cart__list');
  const cartButtons = sideCart.querySelector('.cart__buttons');
  const cartCheckout = sideCart.querySelector('.cart__checkout-container');

  if (cartList) {
    cartList.classList.remove('cart__list--hidden');
  }

  if (cartButtons) {
    cartButtons.classList.remove('cart__buttons--hidden');
  }

  if (cartCheckout) {
    cartCheckout.classList.remove('cart__checkout-container--opened');
  }
};

sideCartClose.addEventListener('click', setCartToInitialVisual)

sideCart.addEventListener('click', (evt) => {
  if (evt.target.closest('.popup__inner')) {
    return;
  }

  setCartToInitialVisual();
})

if (headerCartButton && sideCart) {
  headerCartButton.addEventListener('click', openSideCart)
};
