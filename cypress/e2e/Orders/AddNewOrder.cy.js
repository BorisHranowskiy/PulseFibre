/// <reference types="cypress" />

import Login from "../../Page Object/login"
import Orders from "../../Page Object/Orders"

const login = new Login()
const orders = new Orders()

describe('Orders', () => {
      beforeEach(() => {
        login.loginAsAdmin()
      })

    it('Add order', () => {
        orders.addNewOrder()
      })

})
