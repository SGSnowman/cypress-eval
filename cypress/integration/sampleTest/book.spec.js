const Form_URL = '/books/'

describe('Forms', () => {
  before(() => {
    cy.visit(Form_URL)

    cy.url()
      .should('eq', Cypress.config().baseUrl + Form_URL)
  })

  it('should display the Book Store Page title', () => {
    cy.get('.main-header')
      .should('contain', 'Book Store')
  })

  it('should display the correct title for the book selected', () => {
    cy.get("[id='see-book-Git Pocket Guide'] a").click()
    cy.get('#title-wrapper #userName-value')
      .should('contain', 'Git Pocket Guide')
    cy.get("#addNewRecordButton").click()
    
  })

  it('should display the correct author for the book selected', () => {
    cy.get("[id='see-book-Speaking JavaScript'] a").click()
    cy.get('#author-wrapper #userName-value')
      .should('contain', 'Axel Rauschmayer')
    cy.get("#addNewRecordButton").click()

  })
  
  it('should display the correct pages for the book selected', () => {
    cy.get("[id='see-book-Programming JavaScript Applications'] a").click({force:true})
    cy.get('#pages-wrapper #userName-value')
      .should('contain', '254')
    cy.get("#addNewRecordButton").click()

  })

  it('should display the correct number of book results', () => {
    cy.get(".rt-tbody").find(".rt-tr-group").its('length').should('eq', 10)

  })

})
