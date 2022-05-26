export class FormLayoutsPage{

    submitInlineFormWithNameAndEmail(name, email){
        cy.contains('nb-card', 'Inline form').find('form').then( form => {
            cy.wrap(form).find('[placeholder="Jane Doe"]').type(name)
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('.custom-checkbox').click()
            cy.wrap(form).submit()
        })
    }

    submitBasicFormWithEmailAndPassword(email, password) {
        cy.contains('nb-card', 'Basic form').find('form').then( form => {
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Password"]').type(password)
            cy.wrap(form).find('.custom-checkbox').click()
            cy.wrap(form).submit()
        })
    }

    submitUsingTheGridFormWithEmialPasswordAndRadios(email, password){
        cy.contains('nb-card', 'Using the Grid').find('form').then( form => {
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Password"]').type(password)
            cy.wrap(form).find('nb-radio').then((radioOptions) => {
                let options = radioOptions.length
                cy.wrap(radioOptions).eq(Math.floor(Math.random() * options)).find('[class="inner-circle"]').click()
            })
            cy.wrap(form).submit()
        })
    }

    submitFormWithoutLabelsWithRecipientsSubjectAndMassage(recipients, subject, message) {
        cy.contains('nb-card', 'Form without labels').find('form').then( form => {
            cy.wrap(form).find('[placeholder="Recipients"]').type(recipients)
            cy.wrap(form).find('[placeholder="Subject"]').type(subject)
            cy.wrap(form).find('[placeholder="Message"]').type(message)
            cy.wrap(form).submit()
        })
    }

    submitBlockFormWithFirstAndLastNameEmailAndWebsite(first, last, email, website) {
        cy.contains('nb-card', 'Block form').find('form').then( form => {
            cy.wrap(form).find('[placeholder="First Name"]').type(first)
            cy.wrap(form).find('[placeholder="Last Name"]').type(last)
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Website"]').type(website)
            cy.wrap(form).submit()
        })
    }
}

export const onFormLayoutPage = new FormLayoutsPage()