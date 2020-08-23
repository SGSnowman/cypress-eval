/// <reference types="cypress" />

import { BookPage } from '../../support/pageObjects/bookPage'
import { ProfilePage } from '../../support/pageObjects/profilePage'

describe('Visit Book Store', () => {
  const bookPage = new BookPage()

  beforeEach(() => {
    bookPage.navigate()
  })

  it('should see list of books when visit book store', () => {
    bookPage.verifyBooklistCount(10)
    // TODO should take screenshot here to verify book image match with title
  })

  it('should display the book when searching existed book', () => {
    const bookTitle = 'Designing Evolvable Web APIs with ASP.NET'
    bookPage.searchBook(bookTitle)
    bookPage.verifyBookAppearInSearchResult(bookTitle)
  })

  it('should display book detail when clicking on book title', () => {
    const bookTitle = 'Designing Evolvable Web APIs with ASP.NET'
    bookPage.viewBookDetail(bookTitle)
    bookPage.verifyBookDetail(bookTitle)
  })

  it('should be able to add book to profile after logging in', () => {
    const profilePage = new ProfilePage()
    const bookTitle = 'Designing Evolvable Web APIs with ASP.NET'
    bookPage.loginFromBookPage('tram.vo', 'Tr@m1234')
    bookPage.visitUserProfile()
    // clear all books in profile before adding new book to profile
    profilePage.removeAllBooksFromProfile()
    
    bookPage.visitBookPage()
    bookPage.viewBookDetail(bookTitle)
    bookPage.addBookToProfile()

    // visit user profile again and verify new book added
    bookPage.visitUserProfile()
    profilePage.verifyBookAddedToProfile(bookTitle)
  })
})