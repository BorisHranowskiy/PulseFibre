import Locators from "./locators"

const locator = new Locators()
class Customer {

    
    customerInfo = {
        firstName: "TestA",
        lastName: "TestA",
        randomEmail: locator.randomEmail(),
        mobileNumber: "+12125552368",
        existingEmail: "khranovskiy.borys@coaxsoft.com",
        editedName: " ",
        searchFirstName: "Borys1",
        searchLastName: "Khranovskiy2",
        searchID: "7",
        searchEmail: "khranovskiy.borys@coaxsoft.com",
        searchMobileNumber: "+380679946285",
        companyName: "Test"
    }

    addCustomer() {
        const fillCustomerInfo =({firstName,lastName,randomEmail,mobileNumber,companyName}) =>{
        locator.openCustomerPage()
        locator.clickAddCustomerBtn()
        locator.addUserTab()
        locator.userFirstName().type(firstName)
        locator.userLastName().type(lastName)
        locator.staffEmail().type(randomEmail)
        locator.mobileNumber().type(mobileNumber)
        locator.companyField().type(companyName)
        locator.clickCreateButton()
        locator.successAlertAppears()
        locator.dateField().should('contain', randomEmail)
    }
    fillCustomerInfo(this.customerInfo)
}

    
searchCustomer() {
    const fillCustomerInfo =({searchEmail,searchID,searchMobileNumber,searchFirstName,searchLastName}) =>{
        locator.openCustomerPage()
        locator.searchField().type(searchEmail).type('{enter}')
        locator.dataFieldEmail().should('contain',searchEmail)
        locator.searchField().clear().type(searchMobileNumber).type('{enter}')
        locator.dataFieldMobile().should('contain',searchMobileNumber)
        locator.searchField().clear().type(searchFirstName).type('{enter}')
        locator.dataFieldFirstName().should('contain',searchFirstName)
        locator.searchField().clear().type(searchID).type('{enter}')
        locator.dataFieldID().should('contain',searchID)
        locator.searchField().clear().type(searchLastName).type('{enter}')
        locator.dataFieldLastName().should('contain',searchLastName)
        locator.searchField().clear().type(locator.randomSymbols()).type('{enter}')
        locator.noRecordFound().should('be.visible')
    }
    fillCustomerInfo(this.customerInfo)
}

deleteCustomer() {
    const fillCustomerInfo =({firstName,lastName,randomEmail,mobileNumber}) =>{
    locator.openCustomerPage()
    locator.clickAddCustomerBtn()
    locator.addUserTab()
    locator.userFirstName().type(firstName)
    locator.userLastName().type(lastName)
    locator.staffEmail().type(randomEmail)
    locator.mobileNumber().type(mobileNumber)
    locator.companyField().type(companyName)
    locator.clickCreateButton()
    locator.successAlertAppears()
    locator.dateField().should('contain', randomEmail)
    locator.deleteIcon().first().click()
    locator.deleteFormAppears()
    locator.submitDelete()
    locator.dateField().should('not.contain',randomEmail)
    }
    fillCustomerInfo(this.customerInfo)
    }

    editCustomer() {
        const fillCustomerInfo =({randomEmail}) =>{
        locator.openCustomerPage()
        locator.editIcon().first().click()
        locator.addUserTab()
        locator.staffEmail().clear().type(randomEmail)
        locator.clickSubmitButton()
        locator.successAlertAppears()
        locator.dateField().should('contain',randomEmail)
        }
        fillCustomerInfo(this.customerInfo)
    }

    validationCustomerAdding() {
        const fillCustomerInfo =({existingEmail}) =>{
        locator.openCustomerPage()
        locator.clickAddCustomerBtn()
        locator.clickCreateButton()
        locator.invalidFeedback().should('have.length','4')
        locator.staffEmail().type(existingEmail)
        locator.clickCreateButton()
        locator.existingEmail()
    }
    fillCustomerInfo(this.customerInfo)
    }

}

export default Customer