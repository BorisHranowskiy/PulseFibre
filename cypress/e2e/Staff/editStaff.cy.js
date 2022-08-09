/// <reference types="cypress" />

import Login from "../../Page Object/login"
import Staff from "../../Page Object/Staff"

const login = new Login()
const staff =  new Staff()

describe('Staff', () => {
      beforeEach(() => {
        login.loginAsAdmin()
      })

      it('Add staff', () => {
        staff.addStaff()
      })

    it('Edit staff', () => {
        staff.editUser()
      })

})
