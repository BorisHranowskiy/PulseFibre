/// <reference types="cypress" />

import Login from "../../Page Object/login"
import Product from "../../Page Object/Product"

const login = new Login()
const product = new Product()

describe('Product', () => {
      beforeEach(() => {
        login.loginAsAdmin()
      })

    it('Add product', () => {
        product.editProduct()
      })

})
