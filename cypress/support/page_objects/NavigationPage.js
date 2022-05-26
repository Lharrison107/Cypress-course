
function selectGroupManuItem(groupName){
    cy.contains('a', groupName ).then(menu => {
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then( attr => {
            if(attr.includes('left')) {
                cy.wrap(menu).click()
            }
        })
    })
}

export class NavigationPage{
    //Layout
    stepperPage(){
        selectGroupManuItem('Layout')
        cy.contains('Stepper').click()
    }

    AccordionPage(){
        selectGroupManuItem('Layout')
        cy.contains('Stepper').click()
    }

    //Forms
    formLayoutsPage(){
        selectGroupManuItem('Forms')
        cy.contains('Form Layouts').click()
    }

    datepickerPage(){
        selectGroupManuItem('Forms')
        cy.contains('Datepicker').click()
    }

    //Modal & Overlays
    dialogPage(){
        selectGroupManuItem('Modal & Overlays')
        cy.contains('Dialog').click()
    }

    windowPage(){
        selectGroupManuItem('Modal & Overlays')
        cy.contains('Window').click()
    }

    popoverPage(){
        selectGroupManuItem('Modal & Overlays')
        cy.contains('Popover').click()
    }

    toastrPage(){
        selectGroupManuItem('Modal & Overlays')
        cy.contains('Toastr').click()
    }

    toolTipPage(){
        selectGroupManuItem('Modal & Overlays')
        cy.contains('Tooltip').click()
    }

    //Extra Components
    calendarPage(){
        selectGroupManuItem('Extra Components')
        cy.contains('Calendar').click()
    }

    //Tables & Data
    smartTablePage(){
        selectGroupManuItem('Tables & Data')
        cy.contains('Smart Table').click()
    }

    treeGridPage(){
        selectGroupManuItem('Tables & Data')
        cy.contains('Tree Grid').click()
    }

    //Auth
    loginPage(){
        selectGroupManuItem('Auth')
        cy.contains('Login').click()
    }

    registerPage(){
        selectGroupManuItem('Auth')
        cy.contains('Register').click()
    }

    requestPasswordPage(){
        selectGroupManuItem('Auth')
        cy.contains('Request Password').click()
    }

    resetPasswordPage(){
        selectGroupManuItem('Auth')
        cy.contains('Reset Password').click()
    }
}

export const navigateTo = new NavigationPage()