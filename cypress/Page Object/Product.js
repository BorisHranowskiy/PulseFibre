import Locators from "./locators"


const locators = new Locators()
class Product {

    productInfo = {
        uploadSpeed: "100",
        randomUploadSpeed: Math.floor(Math.random() * 1000000) + 1,
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
        const fillProductInfo =({uploadSpeed,downloadSpeed,costMonthly,costSetup,contactTerm}) =>{
        locators.openProductPage()
        locators.clickAddProductBTN()
        locators.uploadSpeed().type(uploadSpeed)
        locators.downloadSpeed().type(downloadSpeed)
        locators.costSetup().type(costSetup)
        locators.costMonthly().type(costMonthly)
        locators.contractTerm().type(contactTerm)
        locators.clickCreateButton()
        locators.successAlertAppears()
        
    }
    fillProductInfo(this.productInfo)
    }



    validationAddProduct() {
        const fillProductInfo =({invalidContractTerm,invalidCostMonthly,invalidCostSetup,invalidDownloadSpeed,invalidUploadSpeed}) =>{
        locators.openProductPage()
        locators.clickAddProductBTN()
        locators.clickCreateButton()
        locators.invalidFeedback().should('have.length',5)
        locators.uploadSpeed().type(invalidUploadSpeed)
        locators.downloadSpeed().type(invalidDownloadSpeed)
        locators.costSetup().type(invalidCostSetup)
        locators.costMonthly().type(invalidCostMonthly)
        locators.contractTerm().type(invalidContractTerm)
        locators.clickCreateButton()
        locators.invalidFeedback().should('have.length',5)
        
    }
    fillProductInfo(this.productInfo)
    }

    deleteProduct() {
        const fillProductInfo =({randomUploadSpeed,downloadSpeed,costMonthly,costSetup,contactTerm}) =>{
            locators.openProductPage()
            locators.clickAddProductBTN()
            locators.uploadSpeed().clear().type(randomUploadSpeed)
            locators.downloadSpeed().type(downloadSpeed)
            locators.costSetup().type(costSetup)
            locators.costMonthly().type(costMonthly)
            locators.contractTerm().type(contactTerm)
            locators.clickCreateButton()
            locators.successAlertAppears()
            locators.deleteIcon().first().click()
            locators.deleteFormAppears()
            locators.submitDelete()
            locators.getTbody().should('not.contain',randomUploadSpeed)

    }
    fillProductInfo(this.productInfo)
    }

}
export default Product