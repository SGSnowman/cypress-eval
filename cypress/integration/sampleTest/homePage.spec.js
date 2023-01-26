const bookUrl = '/books'
// Validating Left Panel of Home Page
describe('Home Page, ', () => {
  const elementList = [
    'Elements',
    'Forms',
    'Alerts, Frame & Windows',
    'Widgets',
    'Interactions',
    'Book Store Application'
  ];

  before(() => {
    cy.visit(bookUrl)

    cy.url()
      .should('eq', Cypress.config().baseUrl + bookUrl)
  })

  it('Validate left Pannel', () => {
    cy.get('.left-pannel .element-group .header-text').each((item, index, list) => {
      expect(list).to.have.length(6);
      expect(Cypress.$(item).text()).to.eq(elementList[index]);
    })
  })
})