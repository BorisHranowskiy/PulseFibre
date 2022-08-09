/// <reference types="cypress" />

import Customer from "../../Page Object/Customer"
import Login from "../../Page Object/login"

const login = new Login()
const customer = new Customer()

describe('Customer', () => {
      beforeEach(() => {
        login.loginAsAdmin()
      })

    it('Add customer', () => {
      customer.addCustomer()
      })

})
