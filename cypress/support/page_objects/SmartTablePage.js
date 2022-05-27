
export class SmartTablePage{

    updateAgeByFirstName(name, age) {
        cy.get('tbody').contains('tr', name).then( tableRow =>{
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type(age)
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain', age)

        })
    }

    createANewPerson(first, last, user, email, age) {
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then( tableRow => {
            cy.wrap(tableRow).find('[placeholder="First Name"]').clear().type(first)
            cy.wrap(tableRow).find('[placeholder="Last Name"]').clear().type(last) 
            cy.wrap(tableRow).find('[placeholder="Username"]').clear().type(user)
            cy.wrap(tableRow).find('[placeholder="E-mail"]').clear().type(email) 
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type(age)
            cy.wrap(tableRow).find('.nb-checkmark').click()
        })
        cy.get('tbody tr').first().find('td').then( tableColumns => {
            cy.wrap(tableColumns).eq(2).should('contain', 'John')
            cy.wrap(tableColumns).eq(3).should('contain', 'Doe')
        }) 
    }

    deleteRecordOffTable(row) {
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('tbody tr').eq(row).find('.nb-trash').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })
    }

}

export const onSmartTable = new SmartTablePage()