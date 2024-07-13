import {handleOpenPopup} from "./popup.js";

const callbackPopup = document.querySelector('.callback-popup');
const callbackButtons = document.querySelectorAll('.callback-button');

const handleCallbackButton = () => {
  handleOpenPopup(callbackPopup);
};

window.handleCallbackButton = handleCallbackButton;

if (callbackPopup && callbackButtons) {
  callbackButtons.forEach((button) => {
    button.addEventListener('click', handleCallbackButton);
  });
}
