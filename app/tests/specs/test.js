describe('The cart is working as expected', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('elements are present', () => {
    cy.get('.cart').should('exist');
    cy.get('ul').find('li').should('have.length', 4);

    cy.get('[data-test="shipping-Pull"]').should('not.have.class', 'free-shipping');
    cy.get('[data-test="shipping-Bike"]').should('not.have.class', 'free-shipping');
    cy.get('[data-test="shipping-Can"]').should('not.have.class', 'free-shipping');
    cy.get('[data-test="shipping-Phone"]').should('not.have.class', 'free-shipping');
  });

  it('adding a Pull update the totals as expected', () => {
    cy.get('[data-test="btn-Pull"]').click();

    cy.get('[data-test="total"]').contains('€60.00');
    cy.get('[data-test="tax"]').contains('€12.00');
    cy.get('[data-test="shipping"]').contains('€10.00');
  });

  it('adding a Pull should not update the free shipping icons', () => {
    cy.get('[data-test="btn-Pull"]').click();

    cy.get('[data-test="shipping-Pull"]').should('not.have.class', 'free-shipping');
    cy.get('[data-test="shipping-Bike"]').should('not.have.class', 'free-shipping');
    cy.get('[data-test="shipping-Can"]').should('not.have.class', 'free-shipping');
    cy.get('[data-test="shipping-Phone"]').should('not.have.class', 'free-shipping');
  });

  it('adding a Pull and a Bike update the totals as expected', () => {
    cy.get('[data-test="btn-Pull"]').click();
    cy.get('[data-test="btn-Bike"]').click();

    cy.get('[data-test="total"]').contains('€140.00');
    cy.get('[data-test="tax"]').contains('€28.00');
    cy.get('[data-test="shipping"]').contains('€10.00');
  });

  it('adding a Pull and a Bike update the free shipping icons as expected', () => {
    cy.get('[data-test="btn-Pull"]').click();
    cy.get('[data-test="btn-Bike"]').click();

    cy.get('[data-test="shipping-Pull"]').should('have.class', 'free-shipping');
    cy.get('[data-test="shipping-Bike"]').should('have.class', 'free-shipping');
    cy.get('[data-test="shipping-Can"]').should('not.have.class', 'free-shipping');
    cy.get('[data-test="shipping-Phone"]').should('have.class', 'free-shipping');
  });

  it('adding a Pull, a Bike and a Phone update the cart as expected', () => {
    cy.get('[data-test="btn-Pull"]').click();
    cy.get('[data-test="btn-Bike"]').click();
    cy.get('[data-test="btn-Phone"]').click();

    cy.get('[data-test="total"]').contains('€260.00');
    cy.get('[data-test="tax"]').contains('€52.00');
    cy.get('[data-test="shipping"]').contains('€0.00');
  });

  it('adding a Pull, a Bike and a Phone update the free shipping icons as expected', () => {
    cy.get('[data-test="btn-Pull"]').click();
    cy.get('[data-test="btn-Bike"]').click();
    cy.get('[data-test="btn-Phone"]').click();

    cy.get('[data-test="shipping-Pull"]').should('not.have.class', 'free-shipping');
    cy.get('[data-test="shipping-Bike"]').should('not.have.class', 'free-shipping');
    cy.get('[data-test="shipping-Can"]').should('not.have.class', 'free-shipping');
    cy.get('[data-test="shipping-Phone"]').should('not.have.class', 'free-shipping');
  });
});
