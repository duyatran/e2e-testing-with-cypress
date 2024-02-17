describe('input tests for React Albums', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8765');

    cy.get('.search__form')
      .find('input')
      .as('inputField')
  });

  it('can type into the input field (search box)', () => {
    cy.get('@inputField')
      .type('Led Zeppelinnn{backspace}{backspace}', { delay: 300 })
      .should('have.value', 'Led Zeppelin')
  })

  it('can type another input here', () => {
    cy.get('@inputField')
      .type('Led Zeppelinnn{backspace}{backspace}', { delay: 300 })
      .should('have.value', 'Led Zeppelin')
  })

})