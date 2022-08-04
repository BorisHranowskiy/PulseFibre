/// <reference types="cypress" />

import Login from "../../Page Object/login"
import Profile from "../../Page Object/profile"



const login = new Login()
const profile = new Profile()

describe('Profile', () => {
      beforeEach(() => {
        login.loginAsAdmin()
      })

    it('Edit profile', () => {
        profile.editProfile()
      })

})
