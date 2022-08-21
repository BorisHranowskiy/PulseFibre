
import Locators from "./locators"

const locators = new Locators()


class CustomerFlow {

    postCodeInfo = {
        validPostcode: "CH62 0AH",
        invalidPostcode: locators.randomSymbols()
    }

    registrationCustomerInfo = {
        email: locators.randomEmail(),
        password: "Q123123q",
        confrimPassowrd: "Q123123q",
        firstName: locators.randomSymbols(),
        lastName: locators.randomSymbols(),
        mobileNumber: "+12125552368"
    }
    

    validationPostcode() {
        const fillPostCodeInfo = ({invalidPostcode}) => {
        locators.customerLink()
        locators.clickNextButton()
        locators.invalidFeedback()
        locators.customerPostcode().type(invalidPostcode)
        locators.clickNextButton()
        locators.customDangeAlert()
        }
        fillPostCodeInfo(this.postCodeInfo)
    }

    enterValidPostcode() {
        const fillPostCodeInfo = ({validPostcode}) => {
        locators.customerLink()
        locators.customerPostcode().type(validPostcode)
        locators.clickNextButton()
        locators.validAddressesForPostcode()
        }
        fillPostCodeInfo(this.postCodeInfo)
    }

    selectFirstAddress() {
        locators.selectAddress()
        locators.clickNextButton()
        locators.productsDisplayed()
    }

    selectProduct() {
        locators.productPulse1000()
    }

    customerInfoRegistration() {
        const fillCustomerInfo = ({email,password,confrimPassowrd,firstName,lastName,mobileNumber}) => {
        locators.registrationEmail().type(email)
        locators.registrationPassword().type(password)
        locators.registrationConfrimPassword().type(confrimPassowrd)
        locators.registrationFirstName().type(firstName)
        locators.registrationLastName().type(lastName)
        locators.registrationMobileNumber().type(mobileNumber)
        locators.clickNextButton()
        }
        fillCustomerInfo(this.registrationCustomerInfo)
    }

}
export default CustomerFlow