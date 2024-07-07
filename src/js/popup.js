const popups = document.querySelectorAll('.popup');

const handleClosePopup = (popup) => {
  const openedPopupsCount = document.querySelectorAll('.popup--opened').length;

  if (openedPopupsCount === 1) {
    document.body.classList.remove('locked');
  }

  popup.classList.remove('popup--opened');
};

const handleOpenPopup = (popup) => {
  document.body.classList.add('locked');
  popup.classList.add('popup--opened');

  popup.addEventListener('click', (evt) => {
    if (evt.target.closest('.popup__inner')) {
      return;
    }

    handleClosePopup(popup);
  });
};

popups.forEach((popup) => {
  const closeButton = popup.querySelector('.popup__close');

  closeButton.addEventListener('click', () => {
    handleClosePopup(popup);
  });
});

export { handleOpenPopup };
