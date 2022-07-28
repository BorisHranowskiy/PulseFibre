
import Locators from "./locators"

const locator = new Locators()
class Staff {

    staffInfo = {
        firstName: "TestA",
        lastName: "TestA",
        randomEmail: locator.randomEmail(),
        mobileNumber: "+12125552368"
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

}

export default Staff