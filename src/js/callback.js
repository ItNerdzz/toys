import {handleOpenPopup} from "./popup.js";

const callbackPopup = document.querySelector('.callback-popup');
const callbackButtons = document.querySelectorAll('.callback-button');

if (callbackPopup && callbackButtons) {
  callbackButtons.forEach((button) => {
    button.addEventListener('click', () => {
      handleOpenPopup(callbackPopup);
    });
  });
}
