/// <reference types="cypress" />

describe('Our sute section', () => {

    it('first test', () => {
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

    it('then and wrap methods', () => {
        //go to website
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        // //find email in using the grid
        // cy.contains('nb-card', 'Using the Grid').find('[class="label col-sm-3 col-form-label"]').should('contain', 'Email')
        //  //find password in using the grid
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')
        // //find email in basic form
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email')
        //  //find password in basic form
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')

        //condenced
        cy.contains('nb-card', 'Using the Grid').then(firstForm => {
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
            
            expect(emailLabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')

            const secondForm = cy.contains('nb-card', 'Basic form').then( secondForm => {
                const emailLabelSecond = secondForm.find('[for="exampleInputEmail1"]').text()
                expect(emailLabelSecond).to.equal('Email address')

                const passwordLabelSecond = secondForm.find('[for="exampleInputPassword1"]').text()
                expect(passwordLabelFirst).to.equal(passwordLabelSecond)
                //convert jquery to cypress so you can use cyperss methods
                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')

            })
            
            
        })
    })

    it('invoke command', () => {
        //go to website
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        //3 WAYS TO DO THE SAME THING
        //#1
        cy.get('[for="exampleInputEmail1"]').should('contain','Email address')
        //#2
        cy.get('[for="exampleInputEmail1"]').then( Label => {
            expect(Label.text()).to.equal('Email address')
        })
        //#3
        cy.get('[for="exampleInputEmail1"]').invoke('text').then( text => {
            expect(text).to.equal('Email address')
        })

        //EXAPMLES OF INVOKE
        //checkbox
        cy.contains('nb-card', 'Basic form')
            .find('nb-checkbox')
            .click()
            .find('.custom-checkbox')
            .invoke('attr', 'class')
            // .should('contain','checked')
            .then(classValue => {
                expect(classValue).to.contain('checked')
            })
    })

    it('assert property', () => {
        //go to website
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('nb-card','Common Datepicker').find('input').then(input => {
            cy.wrap(input).click()
            cy.get('nb-calendar-day-picker').contains('17').click()
            cy.wrap(input).invoke('prop', 'value').should('contain', 'May 17, 2022')
        })
        
    })

    it('assert property', () => {
        //go to website
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layout').click()

        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then( radioButtons => {
            cy.wrap(radioButtons)
                .first()
                .check({force: true})
                .should('be.checked')

            cy.wrap(radioButtons)
                .eq(1)
                .check({force: true})
        
            cy.wrap(radioButtons)
                .eq(0)
                // //or
                // .first()
                .should('not.be.checked')

            cy.wrap(radioButtons)
                .eq(2)
                .should('be.disabled')
        })
    })

    
    it.only('check boxes', () => {
        //go to website
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()

        // cy.get('[type="checkbox"]').check({force: true})
        cy.get('[type="checkbox"]').eq(0).click({force: true})
        cy.get('[type="checkbox"]').eq(1).check({force: true})


    })


})
