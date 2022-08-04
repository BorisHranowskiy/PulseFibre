import Locators from "./locators"


const locators = new Locators()

class Addresses {

    ConnectedAddresssesInfo = {
        address1: locators.randomSymbols(),
        address2: "autoTest",
        address2Random: locators.randomSymbols(),
        townCity: "autoTest",
        siteCode: "123456",
        postCode: "KY2 5YT",
        pulseAK: "123456",
        invalidSiteCode: "test",
        invalidPulseAK: "test",
        searchAddres1: "Test123",
        searchAddres2: "hello123",
        searchTownCity: "world123",
        searchSiteCode: "",
        searchPostCode: "B68 8AN",
        searchPulseAK: "",
        searchID: "7"
    }

    addConnectedAddress() {
        const fillConnectedAddressesInfo =({address2,address1,townCity,siteCode,postCode,pulseAK}) =>{
        locators.openAddressPage()
        locators.clickAddConectedAddresses()
        locators.firstAddress().type(address1)
        locators.secondAddress().type(address2)
        locators.townCity().type(townCity)
        locators.siteCode().type(siteCode)
        locators.postCode().type(postCode)
        locators.pulseAK().type(pulseAK)
        locators.clickCreateButton()
        locators.successAlertAppears()
        locators.getTbody().should('contain',address1)
    }
    fillConnectedAddressesInfo(this.ConnectedAddresssesInfo)
    }

    editConnectedAddress() {
        const fillConnectedAddressesInfo =({address2Random}) =>{
        locators.openAddressPage()
        locators.editIcon().first().click()
        locators.secondAddress().clear().type(address2Random)
        locators.clickSubmitButton()
        locators.successAlertAppears()
        locators.getTbody().should('contain',address2Random)

    }
    fillConnectedAddressesInfo(this.ConnectedAddresssesInfo)
}

    deleteConnectedAddress() {
        const fillConnectedAddressesInfo =({address2,address1,townCity,siteCode,postCode,pulseAK}) =>{
            locators.openAddressPage()
            locators.clickAddConectedAddresses()
            locators.firstAddress().type(address1)
            locators.secondAddress().type(address2)
            locators.townCity().type(townCity)
            locators.siteCode().type(siteCode)
            locators.postCode().type(postCode)
            locators.pulseAK().type(pulseAK)
            locators.clickCreateButton()
            locators.successAlertAppears()
            locators.getTbody().should('contain',address1)
            locators.deleteIcon().first().click()
            locators.deleteFormAppears()
            locators.submitDelete()
            locators.getTbody().should('not.contain',address1)

        }
        fillConnectedAddressesInfo(this.ConnectedAddresssesInfo)
    }

    addressValidation() {
        const fillConnectedAddressesInfo =({invalidSiteCode,invalidPulseAK,address1,address2,townCity,postCode}) =>{
            locators.openAddressPage()
            locators.clickAddConectedAddresses()
            locators.clickCreateButton()
            locators.invalidFeedback().should('have.length',6)
            locators.firstAddress().type(address1)
            locators.secondAddress().type(address2)
            locators.townCity().type(townCity)
            locators.siteCode().type(invalidSiteCode)
            locators.postCode().type(postCode)
            locators.pulseAK().type(invalidPulseAK)
            locators.clickCreateButton()
            locators.invalidFeedback().should('have.length',2)

    }
    fillConnectedAddressesInfo(this.ConnectedAddresssesInfo)
    }

    searchAddresses() {
        const fillConnectedAddressesInfo =({searchAddres1,searchAddres2,searchPostCode,searchTownCity,searchID}) =>{
            locators.openAddressPage()
            locators.searchField().type(searchAddres1).type('{enter}')
            locators.dataFieldAddress1().should('contain',searchAddres1)
            locators.searchField().clear().type(searchAddres2).type('{enter}')
            locators.dataFieldAddress2().should('contain',searchAddres2)
            locators.searchField().clear().type(searchPostCode).type('{enter}')
            locators.dataFieldPostCode().should('contain',searchPostCode)
            locators.searchField().clear().type(searchID).type('{enter}')
            locators.dataFieldID().should('contain',searchID)
            locators.searchField().clear().type(searchTownCity).type('{enter}')
            locators.dataFieldTownCity().should('contain',searchTownCity)
            locators.searchField().clear().type(locators.randomSymbols()).type('{enter}')
            locators.noRecordFound().should('be.visible')
        }
        fillConnectedAddressesInfo(this.ConnectedAddresssesInfo)
    }
}

export default Addresses