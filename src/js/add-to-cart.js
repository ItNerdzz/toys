const productQuantity = document.querySelector('.product-info__quantity');

if (productQuantity) {
  const input = productQuantity.querySelector('.product-info__value');
  const buttonIncrease = productQuantity.querySelector('.product-info__increase');
  const buttonDecrease = productQuantity.querySelector('.product-info__decrease');

  input.addEventListener('input', event => {
    document.querySelector('.product-info__add-to-cart').setAttribute('data-quantity', input.value);
  });

  buttonIncrease.addEventListener('click', event => {
    input.value = parseInt(input.value) + 1;
    document.querySelector('.product-info__add-to-cart').setAttribute('data-quantity', input.value);
  });

  buttonDecrease.addEventListener('click', event => {
    if (parseInt(input.value) > 1) {
      input.value = parseInt(input.value) - 1;
      document.querySelector('.product-info__add-to-cart').setAttribute('data-quantity', input.value);
    }
  });
}

if (window.jQuery) {
  jQuery(document).ready(function ($) {
    $('body').on('added_to_cart', function (event, fragments, cart_hash, button) {
      button = button || $('.custom-add-to-cart');
      button.find('span').text('Добавлено');

      if (window.updateCartContents) {
        window.updateCartContents();
      }
    });
  });
}
