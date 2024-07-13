const productQuantity = document.querySelector('.card-product__quantity-wrapper');

if (productQuantity) {
  const input = productQuantity.querySelector('.card-product__quantity-value');
  const buttonIncrease = productQuantity.querySelector('.card-product__quantity-increase');
  const buttonDecrease = productQuantity.querySelector('.card-product__quantity-decrease');

  input.addEventListener('input', event => {
    document.querySelector('.product-info__add-to-cart').setAttribute('data-quantity', input.value);
  });

  buttonIncrease.addEventListener('click', event => {
    input.value = parseInt(input.value) + 1;
    document.querySelector('.card-product__cart-btn').setAttribute('data-quantity', input.value);
    document.querySelector('.card-product__order-btn').setAttribute('data-quantity', input.value);

    if (input.value > 1) {
      buttonDecrease.disabled = false;
    }
  });

  buttonDecrease.addEventListener('click', event => {
    if (parseInt(input.value) > 1) {
      input.value = parseInt(input.value) - 1;
      document.querySelector('.card-product__cart-btn').setAttribute('data-quantity', input.value);
      document.querySelector('.card-product__order-btn').setAttribute('data-quantity', input.value);

      if (input.value === 1) {
        buttonDecrease.disabled = false;
      }
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
