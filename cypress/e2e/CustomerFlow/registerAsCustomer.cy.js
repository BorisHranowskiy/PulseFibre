/// <reference types="cypress" />

import CustomerFlow from "../../Page Object/CustomerFlow"

const customerFlow = new CustomerFlow()

describe('Customer flow', () => {

    it('Register as customer', () => {
        customerFlow.enterValidPostcode()
        customerFlow.selectFirstAddress()
        customerFlow.selectProduct()
        customerFlow.customerInfoRegistration()
      })

})
