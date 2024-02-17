describe('checkbox tests for React Albums', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8765');
  });


  it('can uncheck the Explicit checkbox', () => {
    cy.get('#Explicit')
      .uncheck()
      .should('not.be.checked');
  })

  it('can check the EP checkbox by clicking on the label', () => {
    cy.contains('EP')
      .click();

    cy.get('#EP')
      .should('be.checked');
  })
})