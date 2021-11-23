import { INGREDIENT_PRICES } from './prices.js';

let hamburger = {};
let orderTotal = 0;

// Entry point
// Client order example: { meat: 'beef', supplements: ['tomato', 'onion'] }
function orderHamburger(clientOrder) {
  composeHamburger(clientOrder);
  updateTotal();

  return { hamburger, orderTotal };
}

function composeHamburger(clientOrder) {
  hamburger = {
    base: ['bread', 'lettuce', 'cheddar'],
    meat: clientOrder.meat,
    supplements: clientOrder.supplements,
  };
}

function updateTotal() {
  const baseSubTotal = INGREDIENT_PRICES.base.bread + INGREDIENT_PRICES.base.lettuce + INGREDIENT_PRICES.base.cheddar;
  const meatSubTotal = INGREDIENT_PRICES.meat[hamburger.meat];
  let supplementsSubTotal = 0;

  hamburger.supplements.forEach(ingredient => {
    supplementsSubTotal += INGREDIENT_PRICES.supplements[ingredient];
  });

  orderTotal = baseSubTotal + meatSubTotal + supplementsSubTotal;
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
