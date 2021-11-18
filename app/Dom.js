// No need to refactor this file for the kata
import items from './items.js';

export class Dom {
  static updateCartTotal(cartTotal) {
    const cartEl = document.querySelector('#total');
    cartEl.innerHTML = `€${cartTotal.toFixed(2)}`;
  }

  static getItems() {
    return items;
  }

  static updateShipping(shippingCost) {
    const cartEl = document.querySelector('#shipping');
    cartEl.innerHTML = `€${shippingCost.toFixed(2)}`;
  }

  static updateTax(taxTotal) {
    const cartEl = document.querySelector('#tax');
    cartEl.innerHTML = `€${taxTotal.toFixed(2)}`;
  }

  static showFreeShippingIconFor(item) {
    const itemEl = document.querySelector(`[data-item="${item.name}"]`);
    const iconEl = itemEl.querySelector('.icon');

    iconEl.classList.add('free-shipping');
  }

  static hideFreeShippingIconFor(item) {
    const itemEl = document.querySelector(`[data-item="${item.name}"]`);
    const iconEl = itemEl.querySelector('.icon');

    iconEl.classList.remove('free-shipping');
  }

  static hideAllFreeShippingIcons() {
    const iconEls = document.querySelectorAll('.icon');

    iconEls.forEach(el => {
      el.classList.remove('free-shipping');
    });
  }
}
