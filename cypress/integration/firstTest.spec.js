/// <reference types="cypress" />

describe('Our sute section', () => {

    it('some test name', () => {
        //go to website
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //by tag name
        cy.get('input')
        //by ID
        cy.get('#inputEmail1')
        //by class name
        cy.get('.input-full-width')
        //by attribute name
        cy.get('[placeholder]')
        //by attribute name and value
        cy.get('[placeholder="Email"]')
        //by class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')
        //by tagname and attribute with value
        cy.get('input[placeholder="Email"]')
        //by two different attributes
        cy.get('[placeholder="Email"][fullwidth][type="email"]')
        //by tag name, attribute w/ value, ID, and class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
        //MOST RECOMMENDED BY CYPRESS
        //create our own attribute
        cy.get('[data-cy="imputEmail1"]')
    })

    it('second test', () => {
        //go to website
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        //get by cypress specific attribute
        cy.get('[data-cy="signInButton"]')
        //looks for specific text
        cy.contains('Sign in')
        //looks for specific text and anatribute to go along with it. 
        cy.contains('[status="warning"]','Sign in')
        //get input by id then travel to parent form and find button in that form 
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()
        //find a specific element with oly the parent element
        cy.contains('nb-card','Horizontal form').find('[type="email"]')
    })
})
