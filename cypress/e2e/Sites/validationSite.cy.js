/// <reference types="cypress" />

import Login from "../../Page Object/login"
import Sites from "../../Page Object/sites"

const login = new Login()
const sites = new Sites()

describe('Sites', () => {
      beforeEach(() => {
        login.loginAsAdmin()
      })

    it('Add new site', () => {
        sites.validationSite()
      })
})