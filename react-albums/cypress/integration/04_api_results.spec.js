it('can type into the input field (search box)', () => {
  cy.visit('/')

  cy.get('.search__form')
    .find('input')
    .type('Led Zeppelin')

  // wait until the API results load
  cy.wait(200)

  // pick one album and make sure it's visible on screen
  cy.contains('Mothership (Remastered)')
    .should('be.visible')

  cy.contains('Presence (Deluxe Edition)')
    .should('be.visible')

  // uncheck the Explicit filter
  cy.get('#Explicit')
    .uncheck()

  // make sure that the explicit album is gone from view
  cy.get('article.album')
    .should('not.contain', 'Presence (Deluxe Edition)')
})
