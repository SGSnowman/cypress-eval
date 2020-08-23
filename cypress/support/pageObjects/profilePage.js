export class ProfilePage {
  verifyBookAddedToProfile (bookTitle) {
    cy.get('.rt-tr-group:first').should('include.text', bookTitle)
  }

  removeAllBooksFromProfile() {
    cy.get('.justify-content-end > .text-right > #submit').click()
    cy.get('#closeSmallModal-ok', {timeout: 2000}).click()
  }
}
