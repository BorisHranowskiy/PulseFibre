/// <reference types="cypress" />

import CustomerFlow from "../../Page Object/CustomerFlow"

const customerFlow = new CustomerFlow()

describe('Customer flow', () => {
    it('Validate postcode', () => {
       customerFlow.validationPostcode()
      })

})
