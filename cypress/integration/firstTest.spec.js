/// <reference types="cypress" />

describe('Our sute section', () => {

    beforeEach('code for every test', () => {
        // repetative code EX: login
    })

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
})
