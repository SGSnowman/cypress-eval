const Book_URL = '/books'

describe('Forms', () => {
  before(() => {
    cy.visit(Book_URL)
  })

  it('should display the Autocomplete title', () => {
    cy.get('.main-header')
      .should('contain', 'Book Store')
  })
})
