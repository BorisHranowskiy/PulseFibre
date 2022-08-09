import Locators from "./locators"

const locator = new Locators()

class Login {

    loginInfo = {
        password: "mademen123",
        email: "khranovskiy.borys@coaxsoft.com",
        invalidPassword: "Q123123",
        invalidEmail: "khranovskiy.borys111@coaxsoft.com",
        changedPassword: "Q123123q"
    }

    loginAsAdmin() 
    {
        const fillloginInfo =({password,email}) =>{
        locator.loginPage()
        locator.loginTab()
        locator.email().type(email)
        locator.password().type(password)
        locator.clickNextButton()
        locator.pulseLogo()
    }
    fillloginInfo(this.loginInfo)

    }

    loginWithChangedPassowrd() {
        const fillloginInfo =({changedPassword,email}) =>{
            locator.loginPage()
            locator.loginTab()
            locator.email().type(email)
            locator.password().type(changedPassword)
            locator.clickNextButton()
            locator.pulseLogo()
        }
        fillloginInfo(this.loginInfo)

    }

    loginValidation() {
        const fillloginInfo =({password,email,invalidEmail,invalidPassword}) =>{
        locator.loginPage()
        locator.loginTab()
        locator.email().type(email)
        locator.password().type(invalidPassword)
        locator.clickNextButton()
        locator.aleartAppears()
        cy.reload()
        locator.email().type(invalidEmail)
        locator.password().type(password)
        locator.clickNextButton()
        locator.aleartAppears()
        

    }
    fillloginInfo(this.loginInfo)
    }

    forgotPassword() {
        const fillloginInfo =({email,invalidEmail}) =>{
            locator.loginPage()  
            locator.loginTab()
            locator.clickForgotPassword()
            locator.forgotPasswordTab()
            locator.forgotPasswordEmail().type(invalidEmail)
            locator.clickNextButton()
            locator.invalidFeedback()
            locator.forgotPasswordEmail().clear().type(email)
            locator.clickNextButton()
            locator.resetTabMessage()
            locator.clickSubmitButton()
            locator.loginTab()

        }
        fillloginInfo(this.loginInfo)
    }

}
export default Login