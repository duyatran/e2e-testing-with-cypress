describe('tests for Cypress', () => {
  it('works?', () => {
    assert.strictEqual(true, true);
  })

  it('can visit our homepage', () => {
    cy.visit('http://localhost:8765');
  })
})