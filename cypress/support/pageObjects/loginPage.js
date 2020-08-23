import { navigate, verifyPageDisplay } from '../pageObjects/commonFunc'

export class LoginPage {
  navigate () {
    navigate('/login', 'Login')
  }

  login (username, password) {
    cy.get('#userName').type(username)
    cy.get('#password').type(password)
    cy.get('#login').click()
  }
}
