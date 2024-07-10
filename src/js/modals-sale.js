import {handleOpenPopup} from "./popup.js";

const modalSale1 = document.querySelector('.modal--sale-1');
const btnModal1 = document.querySelector('.sale__card-btn--modal-1');

const modalSale2 = document.querySelector('.modal--sale-2');
const btnModal2 = document.querySelector('.sale__card-btn--modal-2');

const initModalSale1 = () => {

  if (modalSale1 && btnModal1) {
    btnModal1.addEventListener('click', () => {
      handleOpenPopup(modalSale1);
    });
  }
};

const initModalSale2 = () => {

  if (modalSale2 && btnModal2) {
    btnModal2.addEventListener('click', () => {
      handleOpenPopup(modalSale2);
    });
  }
};


export {initModalSale1, initModalSale2};
