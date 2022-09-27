
import Locators from "./locators"


const locators = new Locators()

class Orders {

    orderInfo = {
        product: "Pulse 1000 (900/900)",
        hardware: "22173A1001626, TP-Link",
        customer: "24, khranovskiy.borys+te2fff2@coaxsoft.com"
    }

    addNewOrder() {
        const productInfo = ({product,hardware,customer}) => {
        locators.openOrderPage()
        locators.clickAddNewOrderBtn()
        locators.prodcutDropDown()
        cy.wait(1000)
        locators.resultOption().each(($el) => {
            if ($el.text() == product) {
            cy.wrap($el).click()
            }

        })
        locators.clickCustomerDropDown()
        cy.wait(1000)
        locators.resultOption().each(($el) => {
            if ($el.text() == customer) {
            cy.wrap($el).click()
            }
        })
        locators.clickHardwareDropDown()
        cy.wait(1000)
        locators.resultOption().each(($el) => {
            if ($el.text() == hardware) {
            cy.wrap($el).click()
            }
        })
        locators.clickStartAtCalendar()
        locators.todayDate()
        locators.clickCreateButton()

    }
    productInfo(this.orderInfo)
    }
}

export default Orders