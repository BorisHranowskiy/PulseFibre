/// <reference types="cypress" />

import Login from "../../Page Object/login"
import Staff from "../../Page Object/Staff"



const login = new Login()
const staff =  new Staff()

describe('Search staff', () => {
      beforeEach(() => {
        login.loginAsAdmin()
      })

    it('Search', () => {
        staff.searchStaff()
      })

})
