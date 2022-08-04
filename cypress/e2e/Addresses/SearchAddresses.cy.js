/// <reference types="cypress" />

import Addresses from "../../Page Object/addresses"
import Login from "../../Page Object/login"

const login = new Login()
const addresses = new Addresses()

describe('Search addresses', () => {
      beforeEach(() => {
        login.loginAsAdmin()
      })

    it('Search', () => {
        addresses.searchAddresses()
      })

})