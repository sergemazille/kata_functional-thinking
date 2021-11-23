import { Hamburger } from './Hamburger.js';
import { Ingredients } from './Ingredients.js';

export class Order {
  constructor(selectedIngredients) {
    this._hamburger = Hamburger.fromOrder(selectedIngredients);
  }

  get hamburger() {
    return this._hamburger.properties;
  }

  get total() {
    return this.calculateOrderTotal(this._hamburger.ingredients, Ingredients.prices);
  }

  calculateOrderTotal(hamburgerIngredients, ingredientPrices) {
    return hamburgerIngredients.reduce((acc, ingredient) => {
      return (acc += ingredientPrices[ingredient]);
    }, 0);
  }
}
