export function navigate (url, expected_text) {
  cy.visit(Cypress.config().baseUrl + url)
  verifyPageDisplay(url, expected_text)
}

export function verifyPageDisplay (page_url, page_title) {
  cy.url({ timeout: 3000 }).should('eq', Cypress.config().baseUrl + page_url)
  cy.get('.main-header').should('contain', page_title)
}
