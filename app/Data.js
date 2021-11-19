// No need to refactor this file for the kata
export class Data {
  static cart = [];

  static get cart() {
    return Data.cart;
  }

  static set cart(cart) {
    Data.cart = cart;
  }

  static get SHIPPING_COST() {
    return 10;
  }

  static get TAX_RATE() {
    return 0.2;
  }
}
