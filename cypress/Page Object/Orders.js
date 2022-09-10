import Locators from "./locators"


const locators = new Locators()

class Orders {

    orderInfo = {
        product: "Pulse 1000 (900/900)"
    }

    addNewOrder() {
        const fillOrderInfo = ({product}) => {
        locators.openOrderPage()
        locators.clickAddNewOrderBtn()
        locators.prodcutDropDown()
        locators.selectOption().first().click()
        locators.clickCustomerDropDown()
        }
        fillOrderInfo(this.orderInfo)
    }

}

export default Orders