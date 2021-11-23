import { INGREDIENT_PRICES } from './prices.js';

export class Ingredients {
  static get prices() {
    return Object.values(INGREDIENT_PRICES).reduce((acc, current) => {
      return {
        ...acc,
        ...current,
      };
    }, {});
  }
}
