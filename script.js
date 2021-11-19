// This file needs some refactoring...

import { Data } from './app/Data.js';
import { Dom } from './app/Dom.js';

let cart = Data.cart;
let cartTotal = 0;
let shippingCost = Data.SHIPPING_COST;
let taxRate = Data.TAX_RATE;

// keep the export keyword for this function
export function addToCart(name, price) {
  cart.push({ name, price });

  updateCartTotal();
}

function updateCartTotal() {
  cartTotal = 0;

  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    cartTotal += item.price;
  }

  updateCardTotalDom();
  updateShippingDom();
  updateShippingIcons();
  updateTaxDom();
}

function updateTaxDom() {
  Dom.updateTax(cartTotal * taxRate);
}

function updateShippingDom() {
  if (cartTotal >= 200) {
    shippingCost = 0;
  } else {
    shippingCost = 10;
  }

  Dom.updateShipping(shippingCost);
}

function updateShippingIcons() {
  let items = Dom.getItems();

  if (cartTotal > 0 && shippingCost === 0) {
    Dom.hideAllFreeShippingIcons();

    return;
  }

  for (let i = 0; i < items.length; i++) {
    let item = items[i];

    if (item.price + cartTotal >= 200) {
      Dom.showFreeShippingIconFor(item);
    } else {
      Dom.hideFreeShippingIconFor(item);
    }
  }
}

function updateCardTotalDom() {
  Dom.updateCartTotal(cartTotal);
}
