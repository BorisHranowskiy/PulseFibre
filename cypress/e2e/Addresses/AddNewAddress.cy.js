/// <reference types="cypress" />

import Addresses from "../../Page Object/addresses"
import Login from "../../Page Object/login"

const login = new Login()
const address = new Addresses()

describe('Addresses', () => {
      beforeEach(() => {
        login.loginAsAdmin()
      })

    it('Add connected address', () => {
        address.addConnectedAddress()
      })

})
