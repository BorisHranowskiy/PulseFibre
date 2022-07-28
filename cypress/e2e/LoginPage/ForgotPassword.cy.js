/// <reference types="cypress" />

import Locators from "../../Page Object/locators"
import Login from "../../Page Object/login"

const login = new Login()
const locator = new Locators()

describe('Login', () => {

    it('Forgot Password', () => {
        login.forgotPassword()
      })

})
