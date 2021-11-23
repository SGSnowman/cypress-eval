const Book_URL = '/books'

describe('All pages, ', () => {
  const elementList = [
    'Elements',
    'Forms',
    'Alerts, Frame & Windows',
    'Widgets',
    'Interactions',
    'Book Store Application'
  ];

  before(() => {
    cy.visit(Book_URL)

    cy.url()
      .should('eq', Cypress.config().baseUrl + Book_URL)
  })

  it('should display 6 items on left panel', () => {
    cy.get('.left-pannel .element-group .header-text').each((item, index, list) => {
      expect(list).to.have.length(6);
      expect(Cypress.$(item).text()).to.eq(elementList[index]);
    })
  })

})
