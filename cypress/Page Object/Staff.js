
import Locators from "./locators"

const locator = new Locators()
class Staff {

    staffInfo = {
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
    }

    addStaff() {
        const fillStaffInfo =({firstName,lastName,randomEmail,mobileNumber}) =>{
        locator.staffPageClick()
        locator.addStaffButton()
        locator.addUserTab()
        locator.userFirstName().type(firstName)
        locator.userLastName().type(lastName)
        locator.staffEmail().type(randomEmail)
        locator.mobileNumber().type(mobileNumber)
        locator.clickCreateButton()
        locator.successAlertAppears()
        locator.dateField().should('contain', randomEmail)
    }
    fillStaffInfo(this.staffInfo)
}


    validationStaffAdding() {
        const fillStaffInfo =({existingEmail}) =>{
        locator.staffPageClick()
        locator.addStaffButton()
        locator.clickCreateButton()
        locator.invalidFeedback().should('have.length','4')
        locator.staffEmail().type(existingEmail)
        locator.clickCreateButton()
        locator.existingEmail()
    }
    fillStaffInfo(this.staffInfo)
    }

    deleteStaff() {
        const fillStaffInfo =({firstName,lastName,randomEmail,mobileNumber}) =>{
        locator.staffPageClick()
        locator.addStaffButton()
        locator.addUserTab()
        locator.userFirstName().type(firstName)
        locator.userLastName().type(lastName)
        locator.staffEmail().type(randomEmail)
        locator.mobileNumber().type(mobileNumber)
        locator.clickCreateButton()
        locator.successAlertAppears()
        locator.dateField().should('contain', randomEmail)
        locator.deleteIcon().first().click()
        locator.deleteFormAppears()
        locator.submitDelete()
        locator.dateField().should('not.contain',randomEmail)
        }
        fillStaffInfo(this.staffInfo)
    }

    editUser() {
        const fillStaffInfo =({randomEmail}) =>{
        locator.staffPageClick()
        locator.editIcon().first().click()
        locator.addUserTab()
        locator.staffEmail().clear().type(randomEmail)
        locator.clickSubmitButton()
        locator.successAlertAppears()
        locator.dateField().should('contain',randomEmail)
        }
        fillStaffInfo(this.staffInfo)
    }
    
    searchStaff() {
        const fillStaffInfo =({searchEmail,searchID,searchMobileNumber,searchFirstName,searchLastName}) =>{
            locator.staffPageClick()
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
        fillStaffInfo(this.staffInfo)
    }

}

export default Staff