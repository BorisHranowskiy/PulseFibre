/// <reference types="cypress" />

import Login from "../../Page Object/login"



const login = new Login()

describe('Login', () => {
    it('Login as admin', () => {
      login.loginAsAdmin()
      })

})
