const Form_URL = '/automation-practice-form/'
// Filling the form and validating the values entered or not

// Date Picker is handled
//File Uploaded
// Uncaught exception is handled.
describe('Forms', () => {
  before(() => {
    cy.visit(Form_URL)

    cy.url()
      .should('eq', Cypress.config().baseUrl + Form_URL)
  })

  it('should display the Autocomplete title', () => {
    
    // Cypress.on('uncaught:exception', (err, runnable) => {
    //   return false;
    // });
    cy.fixture('userData.json').then((data)=>{ 
      cy.get('.main-header')
      .should('contain', 'Practice Form')

    // cy.get('#firstName').type('Mayank')
    cy.get('#firstName').type(data.firstname)  

    // Cypress.config().baseUrl
    cy.get('#lastName').type(data.lastname)
    cy.get('#userEmail').type(data.email)
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
    cy.get('#userNumber').type(data.phone)
    cy.get('#dateOfBirthInput').click()

    cy.get('.react-datepicker__year-select').select(data.year)
    cy.get('.react-datepicker__month-select').select(data.month)
    cy.contains('11').click({force: true});
    cy.get('.react-datepicker__day--0'+ data.date).click()
    cy.get('.subjects-auto-complete__value-container').type(data.subject)
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
    const p = 'Mayank.png'
    cy.get('#uploadPicture').attachFile(p)
  
    cy.get('#currentAddress').type(data.currentAddres1)
    cy.get('#currentAddress').type('{Enter}')
    cy.get('#currentAddress').type(data.currentAddres2)
    cy.get('.css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r').click()
    cy.contains(data.state).click()
    cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r').click()
    cy.contains(data.city).click({force: true})

    cy.get('#submit').click({force: true})

    cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form')
    
    
    
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain', data.firstname + ' ' + data.lastname)
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain', data.email)
    cy.get('tbody > :nth-child(3) > :nth-child(2)').should('contain', 'Male')
    cy.get('tbody > :nth-child(4) > :nth-child(2)').should('contain', data.phone)
    cy.get('tbody > :nth-child(5) > :nth-child(2)').should('contain', data.date + ' ' + data.month + ',' + data.year)
    cy.get('#closeLargeModal').click() 
        })



    })
  //fill the form
 


})
