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

    it('datepicker', () => {
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

    
    it('check boxes', () => {
        //go to website
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()

        // cy.get('[type="checkbox"]').check({force: true})
        cy.get('[type="checkbox"]').eq(0).click({force: true})
        cy.get('[type="checkbox"]').eq(1).check({force: true})

    })

    it('Lists and dropdowns', () => {
        //go to website
        cy.visit('/')
        //#!
        cy.get('nav nb-select').click()
        cy.get('.options-list').contains('Dark').click()
        cy.get('nav nb-select').should('contain', 'Dark')
        cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)')

        cy.get('nav nb-select').then( dropdown => {
            cy.wrap(dropdown).click()
            cy.get('.options-list nb-option').each( (listItem, index) => {
                const itemText = listItem.text().trim()
                const colors = {
                    "Light": "rgb(255, 255, 255)",
                    "Dark": "rgb(34, 43, 69)",
                    "Cosmic": "rgb(50, 50, 89)",
                    "Corporate": "rgb(255, 255, 255)"
                }
                cy.wrap(listItem).click()
                cy.wrap(dropdown).should('contain', itemText)
                cy.get('nb-layout-header nav').should('have.css', 'background-color', colors[itemText])
                if( index < 3) {
                    cy.wrap(dropdown).click()
                }
            })
        })

    })
    
    it('check boxes', () => {
        //go to website
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        //#1
        cy.get('tbody').contains('tr', 'Larry').then( tableRow =>{
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25')
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain', '25')

        })

        //#2
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then( tableRow => {
            cy.wrap(tableRow).find('[placeholder="First Name"]').clear().type('John')
            cy.wrap(tableRow).find('[placeholder="Last Name"]').clear().type('Doe') 
            cy.wrap(tableRow).find('.nb-checkmark').click()
        })
        cy.get('tbody tr').first().find('td').then( tableColumns => {
            cy.wrap(tableColumns).eq(2).should('contain', 'John')
            cy.wrap(tableColumns).eq(3).should('contain', 'Doe')
        })

        //#3
        const age = [20, 30, 40, 200]

        cy.wrap(age).each( age => {
            cy.get('thead [placeholder="Age"]').clear().type(age)
            cy.wait(500)
            cy.get('tbody tr').each( tableRow => {
                if(age == 200) {
                    cy.wrap(tableRow).should('contain', 'No data found')   
                } else {
                cy.wrap(tableRow).find('td').eq(6).should('contain', age)   
                }
                
            })
        })
        
    })

    it('smart datepickers', () => {
        function selectDayFromCurrent (day) {
            let date = new Date()
            date.setDate(date.getDate() + day)
            let futureDate = date.getDay()
            let futureMonth = date.toLocaleString('default', {month: 'short'})
            let dateAssert = futureMonth+' '+futureDate+', '+date.getFullYear()

            cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then( dateAttribute => {
                if(!dateAttribute.includes(futureMonth)) {
                    cy.get('[data-name="chevron-right"]').click()
                    selectDayFromCurrent(day)
                } else {
                    cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDate).click()
                }
            })
            return dateAssert
        }
        //go to website
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()
       
        cy.contains('nb-card','Common Datepicker').find('input').then(input => {
            cy.wrap(input).click()
            let dateAssert = selectDayFromCurrent(1)
            cy.wrap(input).invoke('prop', 'value').should('contain', dateAssert)
        })

    })

    it('tool tips', () => {
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Tooltip').click()

        cy.contains('nb-card', 'Colored Tooltips')
            .contains('Default').click()
        cy.get('nb-tooltip').should('contain', 'This is a tooltip')
        
    })

    it('tool tips', () => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('tbody tr').first().find('.nb-trash').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })
        //my own fun test for actually deleting
        // cy.get('tbody tr').first().find('.nb-trash').click()
        // cy.on('window:confirm', () => true)
        // cy.get('tbody tr').find('[class="ng-star-inserted"]').find('1').should('not.exist')
    })

})
