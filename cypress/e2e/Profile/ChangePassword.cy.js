/// <reference types="cypress" />

import Login from "../../Page Object/login"
import Profile from "../../Page Object/profile"

const login = new Login()
const profile = new Profile()

describe('Profile', () => {

    it('Login with current password, change password to the new one', () => {
        login.loginAsAdmin()
        profile.changePassword()
      })

      it('Login with changed password, change password back', () => {
        login.loginWithChangedPassowrd()
        profile.changePasswordBack()
      })

})
