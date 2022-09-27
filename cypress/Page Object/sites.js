import Locators from "./locators"

const locators = new Locators()


class Sites {

    SiteInfo = {
        siteCode: "12345",
        siteName: locators.randomSymbols(),
        siteName2: locators.randomSymbols(),
        nominalCode: "test",
        developer: "test",
        invalidSiteCode: "Test"
        
    }

    addDeleteSite() {
    const fillSiteInfo = ({siteCode,siteName,nominalCode,developer}) => {
        locators.openSitePage()
        locators.addSiteBtn()
        locators.siteName().type(siteName)
        locators.siteCode().type(siteCode)
        locators.nominalCode().type(nominalCode)
        locators.developer().type(developer)
        locators.clickCreateButton()
        locators.successAlertAppears()
        locators.closeIcon()
        locators.deleteIcon().first().click()
        locators.deleteFormAppears()
        locators.submitDelete()
        locators.getTbody().should('not.contain',siteName)

    }
  fillSiteInfo(this.SiteInfo)
}

    editSite() {
        const fillSiteInfo = ({siteName2,siteName,siteCode,developer,nominalCode}) => {
        locators.openSitePage()
        locators.addSiteBtn()
        locators.siteName().type(siteName)
        locators.siteCode().type(siteCode)
        locators.nominalCode().type(nominalCode)
        locators.developer().type(developer)
        locators.clickCreateButton()
        locators.successAlertAppears()
        locators.closeIcon()
        locators.editIcon().first().click()
        locators.siteName().clear().type(siteName2)
        locators.clickSubmitButton()
        locators.getTbody().should('contain',siteName2)
        }
    fillSiteInfo(this.SiteInfo)
    }

    validationSite() {
        const fillSiteInfo = ({siteName,invalidSiteCode,developer,nominalCode}) => {
        locators.openSitePage()
        locators.addSiteBtn()
        locators.clickCreateButton()
        locators.invalidFeedback().should('have.length',4)
        locators.siteName().type(siteName)
        locators.siteCode().type(invalidSiteCode)
        locators.nominalCode().type(nominalCode)
        locators.developer().type(developer)
        locators.clickCreateButton()
        locators.invalidFeedback().should('have.length',1)
        }
        fillSiteInfo(this.SiteInfo)
    }
}

export default Sites