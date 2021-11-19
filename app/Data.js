// No need to refactor this file for the kata
export class Data {
  static cart = [];

  static get cart() {
    return Data.cart;
  }

  static set cart(cart) {
    Data.cart = cart;
  }
}
