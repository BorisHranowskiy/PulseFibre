
class Locators {

    loginPage() {
        return cy.visit('https://dev.pulsefibre.co.uk/')
    }

    email() {
        return cy.get('[type="email"]')
    }

    password() {
        return cy.get('[type="password"]')
    }

    clickNextButton() {
        return cy.contains('Next').click()
    }

    pulseLogo() {
        return cy.get('#kt_aside_brand').should('be.visible')
    }

    aleartAppears() {
        return cy.get('[class=custom-danger-alert]').should('be.visible')
    }

    clickForgotPassword() {
        return cy.get('#kt_login_forgot').click()
    }

    forgotPasswordTab() {
        return cy.get('[class=kt-login__forgot]').should('be.visible')
    }

    invalidFeedback() {
        return cy.get('[class=invalid-feedback]').should('be.visible')
    }

    forgotPasswordEmail() {
        return cy.get('#kt_email')
    }

    resetTabMessage() {
        return cy.get('[class=kt-portlet]').should('be.visible')
    }

    clickSubmitButton(){
        return cy.get('[type="submit"]').click()
    }

    loginTab() {
        return cy.get('[class=kt-login__container]').should('be.visible')
    }

    staffPageClick() {
        return cy.get('.kt-menu__link-text.custom-section-menu-title').contains('STAFF USERS').click()
    }

    addStaffButton() {
        return cy.get('[href="/users/create/"]').click()
    }

    addUserTab() {
        return cy.get('[class=kt-portlet]').should('be.visible')
    }

    userFirstName() {
        return cy.get('[name="first_name"]')
    }

    userLastName() {
        return cy.get('[name="last_name"]')
    }

    randomEmail() {
       return "khranovskiy.borys+" + (Math.random()).toString(36).substring(7) + "@coaxsoft.com"
    }

    staffEmail() {
        return cy.get('[name=email]')
    }

    mobileNumber() {
        return cy.get('[name=mobile_number]')
    }

    clickCreateButton() {
        return cy.get('[value="Create"]').click()
    }

    successAlertAppears() {
        cy.get('.alert-success').should('be.visible')
    }

    dateField() {
        return cy.get('[data-field="email"]')
    }

    existingEmail() {
        return cy.get('.display-flex').should('contain','Sorry, but a user with this email already exists.')
    }

    deleteIcon() {
        return cy.get('.delete-action')
    }

    editIcon() {
        return cy.get('.edit-action')
    }

    deleteFormAppears() {
        cy.get('#own-delete-form').should('be.visible')
        
    }

    submitDelete() {
        cy.get('.btn.button-text.custom-confirm-button').click()
    }
 

}

export default Locators