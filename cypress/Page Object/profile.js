import Locators from "./locators"
import Login from "./login"

const login = new Login()
const locators = new Locators()
class Profile {

    userInfo= {
        firstName: locators.randomSymbols(),
        oldPassword: "mademen123",
        newPassword: "Q123123q",
        invalidCurrentPassword: "fffffffff123",
        invalidConfrimPassowrd: "fffffffff123"
    }

    editProfile() {
        const fillUserInfo = ({firstName}) => {
        locators.clickOnUserHeader()
        locators.openMyProfile()
        locators.userFirstName().clear().type(firstName)
        locators.clickSubmitButton()
        locators.successAlertAppears()
        locators.userNameHeader().contains(firstName,{ matchCase: false })
        }
        fillUserInfo(this.userInfo)
    }

    changePassword() {
        const fillUserInfo = ({oldPassword,newPassword}) => {
        locators.clickOnUserHeader()
        locators.openMyProfile()
        locators.clickPasswordChangeTab()
        cy.wait(1000)
        locators.oldPassword().type(oldPassword)
        locators.newPassowrd().type(newPassword)
        locators.confrimNewPassword().type(newPassword)
        locators.clickSubmitButton()
        locators.successAlertAppears()
        }
        fillUserInfo(this.userInfo)
    }

    changePasswordBack() {
        const fillUserInfo = ({oldPassword,newPassword}) => {
        locators.clickOnUserHeader()
        locators.openMyProfile()
        locators.clickPasswordChangeTab()
        locators.oldPassword().type(newPassword)
        locators.newPassowrd().type(oldPassword)
        locators.confrimNewPassword().type(oldPassword)
        locators.clickSubmitButton()
        locators.successAlertAppears()
        }
        fillUserInfo(this.userInfo)
    }

    passwordValidation() {
        const fillUserInfo = ({invalidConfrimPassowrd,invalidCurrentPassword,oldPassword,newPassword}) => {
            locators.clickOnUserHeader()
            locators.openMyProfile()
            locators.clickPasswordChangeTab()
            locators.oldPassword().type(oldPassword)
            locators.newPassowrd().type(newPassword)
            locators.confrimNewPassword().type(invalidConfrimPassowrd)
            locators.clickSubmitButton()
            locators.invalidFeedback().should('be.visible')
            locators.oldPassword().type(invalidCurrentPassword)
            locators.newPassowrd().type(newPassword)
            locators.confrimNewPassword().type(newPassword)
            locators.clickSubmitButton()
            locators.invalidFeedback().should('be.visible')

        }
        fillUserInfo(this.userInfo)
    }
    

}
export default Profile