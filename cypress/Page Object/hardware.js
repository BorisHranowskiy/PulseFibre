import Locators from "./locators"

const locator = new Locators()
class Hardware {

    hardwareInfo = {
        serialNumber: locator.randomSymbols(),
        make: "test",
        model: "test",
        randomMake: locator.randomSymbols(),
        searchSerialNumber: "TestSearch1",
        searchMake: "TestSearch2",
        searchModel: "TestSearch3"
    }

    addHardware() {
        const fillHardwareinfo = ({serialNumber,make,model}) => {
        locator.openHardwarePage()
        locator.addHardwareBtn()
        locator.serialNumber().type(serialNumber)
        locator.make().type(make)
        locator.model().type(model)
        locator.clickCreateButton()
        locator.successAlertAppears()
        locator.dataFieldSerialNumber().should('contain',serialNumber)
        }
        fillHardwareinfo(this.hardwareInfo)

    }


    hardwareValidation() {
        const fillHardwareinfo = ({searchSerialNumber}) => {
        locator.openHardwarePage()
        locator.addHardwareBtn()
        locator.clickCreateButton()
        locator.invalidFeedback().should('have.length',1)
        locator.serialNumber().type(searchSerialNumber)
        locator.clickCreateButton()
        locator.invalidFeedback().should('have.length',1)

        }
        fillHardwareinfo(this.hardwareInfo)

    }

    editHardware() {
        const fillHardwareinfo = ({randomMake}) => {
            locator.openHardwarePage()
            locator.editIcon().first().click()
            locator.make().clear().type(randomMake)
            locator.clickSubmitButton()
            locator.successAlertAppears()
            locator.dataFieldMake().should('contain',randomMake)
            }
            fillHardwareinfo(this.hardwareInfo)
    }


    deleteHardware() {
        const fillHardwareinfo = ({serialNumber,make,model}) => {
        locator.openHardwarePage()
        locator.addHardwareBtn()
        locator.serialNumber().type(serialNumber)
        locator.make().type(make)
        locator.model().type(model)
        locator.clickCreateButton()
        locator.successAlertAppears()
        locator.dataFieldSerialNumber().should('contain',serialNumber)
        locator.deleteIcon().first().click()
        locator.deleteFormAppears()
        locator.submitDelete()
        locator.dataFieldSerialNumber().should('not.contain',serialNumber)
        }
        fillHardwareinfo(this.hardwareInfo)

    }

    searchHardware() {
        const fillHardwareinfo = ({searchSerialNumber,searchModel,searchMake}) => {
        locator.openHardwarePage()
        locator.searchField().type(searchSerialNumber).type('{enter}')
        locator.dataFieldSerialNumber().should('contain',searchSerialNumber)
        locator.searchField().clear().type(searchModel).type('{enter}')
        locator.dataFieldModel().should('contain',searchModel)
        locator.searchField().clear().type(searchMake).type('{enter}')
        locator.dataFieldMake().should('contain',searchMake)
        locator.searchField().clear().type(locator.randomSymbols()).type('{enter}')
        locator.noRecordFound().should('be.visible')
        }
        fillHardwareinfo(this.hardwareInfo)

    }

    importHardware() {
        locator.openHardwarePage()
        locator.importHardwareBtn()
        locator.importFile().attachFile('hardware.csv')
        locator.clickSubmitButton()
        locator.clickSubmitButton()
        locator.successAlertAppears()
    }

}

export default Hardware