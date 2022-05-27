/// <reference types="cypress" />

import { onDatePicker } from "../support/page_objects/DatePickerPage"
import { onFormLayoutPage } from "../support/page_objects/formLayoutsPage"
import { navigateTo } from "../support/page_objects/NavigationPage"
import { onSmartTable } from "../support/page_objects/SmartTablePage"

describe('Our sute section', () => {
    beforeEach('open application', () => {
        cy.openHomePage()
    })
    
    it('verify navigation across the pages', () => {
        navigateTo.AccordionPage()
        navigateTo.calendarPage()
        navigateTo.datepickerPage()
        navigateTo.dialogPage()
        navigateTo.formLayoutsPage()
        navigateTo.popoverPage()
        navigateTo.smartTablePage()
        navigateTo.stepperPage()
        navigateTo.toastrPage()
        navigateTo.toolTipPage()
        navigateTo.treeGridPage()
        navigateTo.windowPage()
    })

    it('submitting forms on form layout page', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutPage.submitInlineFormWithNameAndEmail('john', 'amuseddeer@gmail.com')
        onFormLayoutPage.submitBasicFormWithEmailAndPassword('Amuseddeer@gmail.com', 'Diesel123$')
        onFormLayoutPage.submitUsingTheGridFormWithEmialPasswordAndRadios('Amuseddeer@gmail.com', 'Diesel123$')
        onFormLayoutPage.submitFormWithoutLabelsWithRecipientsSubjectAndMassage('john and carol', 'Submitting the form', 'on the task of submitting the form blah blah blah')
    })

    it('picking dates on datepicker', () => {
        navigateTo.datepickerPage()
        onDatePicker.selectCommanDatePickerDateFromToday(1)
        onDatePicker.selectDatePickerWithRangeFromToday(7, 14)
    })

    it('manipulate the smart table', () => {
        navigateTo.smartTablePage()
        onSmartTable.createANewPerson('John', 'Doe', '@JD0402', 'Jdoe@gmail.com', 25)
        onSmartTable.updateAgeByFirstName('John', 24)
        onSmartTable.deleteRecordOffTable(2)
    })


})
