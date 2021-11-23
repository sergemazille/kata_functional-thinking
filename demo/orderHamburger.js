import { Order } from './Order.js';

// Entry point
// Client order example: { meat: 'beef', supplements: ['tomato', 'onion'] }
function orderHamburger(clientOrder) {
  const order = new Order(clientOrder);

  const hamburger = order.hamburger;
  const orderTotal = order.total;

  return { hamburger, orderTotal };
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
