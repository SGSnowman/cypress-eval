const Book_URL = '/books'

describe('In books page, ', () => {

  before(() => {
    cy.visit(Book_URL)

    cy.url()
      .should('eq', Cypress.config().baseUrl + Book_URL)
  })


  it('verify search button gives exact results and verify book page', () => {
    var text='Git Pocket Guide'
    cy.get('#searchBox').type(text);
    cy.get('.action-buttons a').each((item, index, list) => {
      expect(list).to.have.length(1);
      expect(Cypress.$(item).text().trim()).to.eq(text);
      })
  })

  it('verify book page', () => {
    cy.get('.action-buttons a').click();
    cy.url().should('eq', Cypress.config().baseUrl + Book_URL + '?book=9781449325862');
    cy.get('.mt-2.row #userName-value'  ).should('have.length', 8)
    cy.get('#addNewRecordButton').click();
    cy.url().should('eq', Cypress.config().baseUrl + Book_URL)
  })


  it('verify page dropdown at the bottom displays only selected number of books', () => {
    cy.get('.select-wrap select').select('5 rows')
    cy.get('.action-buttons a').should('have.length', 5)
  })

  it('verify next button shows next set of books and previous hows intial set of books', () => {
    cy.get('.-next').click();
    cy.get('.action-buttons a').should('have.length', 3)
    cy.get('.-previous').click();
    cy.get('.action-buttons a').should('have.length', 5)
  })
})
