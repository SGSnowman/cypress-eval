import { navigate } from './commonFunc'
import { LoginPage } from './loginPage'

export class BookPage {
  navigate () {
    navigate('/books', 'Book Store')
  }

  visitBookPage () {
    cy.get(':nth-child(6) > .element-list > .menu-list > #item-2').click()
  }

  visitUserProfile () {
    cy.get(':nth-child(6) > .element-list > .menu-list > #item-3').click()
  }

  searchBook (title) {
    cy.get('#searchBox').type(title)
  }

  loginFromBookPage (username, password) {
    const loginPage = new LoginPage()
    cy.get('#login').click()
    loginPage.login(username, password)
    this.verifyLoginSuccess(username)
  }
  viewBookDetail (bookTitle) {
    cy.contains(bookTitle)
      .focus()
      .click({ force: true })
  }

  addBookToProfile () {
    cy.get('.text-right > #addNewRecordButton', { timeout: 5000 })
      .focus()
      .click()
    cy.wait(2000)
    cy.on('window:confirm', () => true)
  }

  verifyBooklistCount (expectedNoOfBook) {
    cy.get('.rt-tr-group').should('have.length', expectedNoOfBook)
  }

  verifyBookAppearInSearchResult (title) {
    cy.get('.rt-tr-group:first').should('include.text', title)
  }

  verifyBookDetail (title) {
    cy.get('#title-label').should('include.text', 'Title')
    cy.get('#title-wrapper > .col-md-9 > #userName-value').should(
      'include.text',
      title
    )

    // TODO should write more line to verify,
    // But better approach is taking screenshot and compare
  }

  verifyLoginSuccess (username) {
    cy.get('#userName-value', { timeout: 6000 }).should('have.text', username)
  }
}
