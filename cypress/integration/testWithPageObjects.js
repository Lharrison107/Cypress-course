/// <reference types="cypress" />

import { onDatePicker } from "../support/page_objects/DatePickerPage"
import { onFormLayoutPage } from "../support/page_objects/formLayoutsPage"
import { navigateTo } from "../support/page_objects/NavigationPage"

describe('Our sute section', () => {
    beforeEach('open application', () => {
        cy.visit('/')
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

    it.only('should submit inline using the grid and form without labels and pick a date on calendar', () => {
        navigateTo.formLayoutsPage()
        // onFormLayoutPage.submitInlineFormWithNameAndEmail('john', 'amuseddeer@gmail.com')
        // onFormLayoutPage.submitBasicFormWithEmailAndPassword('Amuseddeer@gmail.com', 'Diesel123$')
        // onFormLayoutPage.submitUsingTheGridFormWithEmialPasswordAndRadios('Amuseddeer@gmail.com', 'Diesel123$')
        // onFormLayoutPage.submitFormWithoutLabelsWithRecipientsSubjectAndMassage('john and carol', 'Submitting the form', 'on the task of submitting the form blah blah blah')
        navigateTo.datepickerPage()
        onDatePicker.selectCommanDatePickerDateFromToday(1)
        onDatePicker.selectDatePickerWithRangeFromToday(7, 14)
    })

})
