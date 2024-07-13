const accordionButtons = document.querySelectorAll('.accordion-item__button');

const toggleAccordionItem = (targetItem) => {
  const contentWrapper = targetItem.querySelector('.accordion-item__content-wrapper');

  if (targetItem.classList.contains('accordion-item--opened')) {
    contentWrapper.style.height = 0 + 'px';
    targetItem.classList.remove('accordion-item--opened');
  } else {
    targetItem.classList.add('accordion-item--opened');
    const content = targetItem.querySelector('.accordion-item__content');

    contentWrapper.style.height = content.offsetHeight + 'px';
  }
};

accordionButtons.forEach((button) => {
  const item = button.closest('.accordion-item');

  button.addEventListener('click', () => toggleAccordionItem(item));
});

export {toggleAccordionItem};
