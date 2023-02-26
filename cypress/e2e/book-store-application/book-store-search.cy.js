/// <reference types="cypress" />

describe(`Demoqa Book Store Apllication Tests`, () => {
  
  //To store the book details
  let bookDetails;

  before(() => {
    //Fixture contains the book details
    cy.fixture(`bookDetails`).then((bookDetailsdata) => {
      bookDetails = bookDetailsdata;
    });
  });

  beforeEach(() => {
    cy.uncaughtExceptionHandler();
    //cy.visit("/books/");
    cy.visit(Cypress.env(`bookStore`));
  });

  it(`Verify availability of elements`, () => {
    //Serch box
    cy.get(`#searchBox`).should(`have.length`, 1);
    //Login button
    cy.get(`#login`).should(`have.length`, 1);
    //Login section
    cy.get(`:nth-child(6) > .element-list > .menu-list > #item-0`).should(
      `have.length`,
      1
    );
  });

  it(`Should be able to search for books`, () => {
    cy.log(`Searching for book -> ${bookDetails.Title}`);
    cy.get(`#searchBox`).type(`${bookDetails.Title}`);
    cy.get(`.rt-tbody > :nth-child(1)`).should(`have.length`, 1);
  });

  it(`Verify the author and Publisher details`, () => {
    cy.get(`#searchBox`).type(`JavaScript{enter}`);
    cy.get(`.rt-tbody`)
      .children(`.rt-tr-group`)
      .find(`.mr-2>a:contains(${bookDetails.Title})`)
      .click();
    cy.get(`#title-wrapper > .col-md-9 > #userName-value`).should(
      `have.text`,
      bookDetails.Title
    );
    cy.get(`#author-wrapper > .col-md-9 > #userName-value`).should(
      `have.text`,
      bookDetails.Author
    );
  });
});
