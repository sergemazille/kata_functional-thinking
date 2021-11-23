import { INGREDIENT_PRICES } from './prices.js';

// Entry point
// Client order example: { meat: 'beef', supplements: ['tomato', 'onion'] }
function orderHamburger(clientOrder) {
  const hamburger = composeHamburger(clientOrder);
  const hamburgerIngredients = getHamburgerIngredients(hamburger);
  const ingredientPrices = getIngredientPrices(INGREDIENT_PRICES)
  const orderTotal = calculateOrderTotal(hamburgerIngredients, ingredientPrices);
  
  return { hamburger, orderTotal };
}

function composeHamburger(clientOrder) {
  return {
    base: ['bread', 'lettuce', 'cheddar'],
    meat: clientOrder.meat,
    supplements: clientOrder.supplements,
  };
}

function calculateOrderTotal(hamburgerIngredients, ingredientPrices) {
  return hamburgerIngredients.reduce((acc, ingredient) => {
    return (acc += ingredientPrices[ingredient]);
  }, 0);
}

function getHamburgerIngredients(hamburger) {
  return Object.values(hamburger)
    .map(value => value)
    .flatMap(value => value);
}

function getIngredientPrices(prices) {
  return Object.values(prices).reduce((acc, current) => {
    return {
      ...acc,
      ...current
    }
  }, {})
}

// test ($> node demo/orderHamburger.js)
const clientOrder = { meat: 'beef', supplements: ['tomato', 'onion'] };
const expected = {
  hamburger: {
    base: ['bread', 'lettuce', 'cheddar'],
    meat: 'beef',
    supplements: ['tomato', 'onion'],
  },
  orderTotal: 10,
};

if (JSON.stringify(orderHamburger(clientOrder)) !== JSON.stringify(expected)) {
  console.log('Test FAIL');
} else {
  console.log('Test OK');
}
