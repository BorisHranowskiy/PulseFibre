import Locators from "./locators"

const locators = new Locators()

class Product {

    productInfo = {
        productName: locators.randomSymbols(),
        secondProductName: locators.randomSymbols(),
        uploadSpeed: "100",
        randomUploadSpeed: Math.floor(Math.random() * 10000) + 1,
        invalidUploadSpeed: "ff",
        downloadSpeed: "70",
        invalidDownloadSpeed: "ff",
        costSetup: "100",
        invalidCostSetup: "ff",
        costMonthly: "50",
        invalidCostMonthly: "ff",
        contactTerm: "12",
        invalidContractTerm: "ff"

        }


    addProduct() {
        const fillProductInfo =({uploadSpeed,downloadSpeed,costMonthly,costSetup,contactTerm,productName}) =>{
        locators.openProductPage()
        locators.clickAddProductBTN()
        locators.productName().type(productName)
        locators.uploadSpeed().type(uploadSpeed)
        locators.downloadSpeed().type(downloadSpeed)
        locators.costSetup().type(costSetup)
        locators.costMonthly().type(costMonthly)
        locators.contractTerm().type(contactTerm)
        locators.clickCreateButton()
        locators.successAlertAppears()
        locators.getTbody().should('contain',productName)

        
    }
    fillProductInfo(this.productInfo)
    }

    editProduct() {
        const fillProductInfo =({secondProductName}) =>{
        locators.openProductPage()
        locators.editIcon().first().click()
        locators.productName().clear().type(secondProductName)
        locators.clickSubmitButton()
        locators.successAlertAppears()
        locators.getTbody().should('contain',secondProductName)

        
    }
    fillProductInfo(this.productInfo)
    }



    validationAddProduct() {
        const fillProductInfo =({invalidContractTerm,invalidCostMonthly,invalidCostSetup,invalidDownloadSpeed,invalidUploadSpeed}) =>{
        locators.openProductPage()
        locators.clickAddProductBTN()
        locators.clickCreateButton()
        locators.invalidFeedback().should('have.length',6)
        locators.uploadSpeed().type(invalidUploadSpeed)
        locators.downloadSpeed().type(invalidDownloadSpeed)
        locators.costSetup().type(invalidCostSetup)
        locators.costMonthly().type(invalidCostMonthly)
        locators.contractTerm().type(invalidContractTerm)
        locators.clickCreateButton()
        locators.invalidFeedback().should('have.length',6)
        
    }
    fillProductInfo(this.productInfo)
    }

    deleteProduct() {
        const fillProductInfo =({randomUploadSpeed,downloadSpeed,costMonthly,costSetup,contactTerm,productName}) =>{
            locators.openProductPage()
            locators.clickAddProductBTN()
            locators.productName().type(productName)
            locators.uploadSpeed().type(randomUploadSpeed)
            locators.downloadSpeed().type(downloadSpeed)
            locators.costSetup().type(costSetup)
            locators.costMonthly().type(costMonthly)
            locators.contractTerm().type(contactTerm)
            locators.clickCreateButton()
            locators.successAlertAppears()
            locators.deleteIcon().first().click()
            locators.deleteFormAppears()
            locators.submitDelete()
            locators.getTbody().should('not.contain',productName)

    }
    fillProductInfo(this.productInfo)
    }

}
export default Product