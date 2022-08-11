/// <reference types="cypress" />

import Hardware from "../../Page Object/hardware"
import Login from "../../Page Object/login"

const login = new Login()
const hardware = new Hardware()

describe('Hardware', () => {
      beforeEach(() => {
        login.loginAsAdmin()
      })

    it('Edit hardware', () => {
      hardware.editHardware()
      })

})
