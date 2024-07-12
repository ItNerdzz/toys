import {handleOpenPopup} from "./popup.js";

const modalSale = document.querySelector('.modal-sale');
const modalButton = document.querySelectorAll('.sale__card-btn');

// sale__card

const handleModalButton = (evt) => {
  const saleCard = evt.target.closest('.sale__card');
  const date = saleCard.querySelector('.sale__card-datetime');
  const title = saleCard.querySelector('.sale__card-text');
  const content = saleCard.querySelector('.sale__modal-content');

  modalSale.querySelector('.modal-sale__datetime').innerHTML = date.innerHTML;
  modalSale.querySelector('.modal-sale__text-title').textContent = title.textContent;
  modalSale.querySelector('.modal-sale__content').innerHTML = content.innerHTML;

  handleOpenPopup(modalSale);
};

if (modalSale && modalButton) {
  modalButton.forEach(button => {
    button.addEventListener('click', handleModalButton);
  });
}
