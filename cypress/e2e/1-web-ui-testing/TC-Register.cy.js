import registerPage from '../../support/pageObject/registerPage'
// const userRegister = require('../../fixtures/userRegister.json')

describe('DemoWebShop UI Testing - Login', () => {

    function randomEmail(){
      const randomString = Math.random().toString(36).substring(2, 10)
      const email = randomString + "@gmail.com"
      return email
    }

    function randomName(){
        const randomString = Math.random().toString(36).substring(2, 10)
        const name = randomString
        return name
      }
    
    let emailAddress = randomEmail()
    let name = randomName()

    beforeEach(() => {
      cy.visit(Cypress.env('webdemoshop_url'))
      cy.clickObject('[class="ico-register"]')
    })

    it('success register', () => {
      registerPage.chooseFemale()
      registerPage.inputFirstName(randomName())
      registerPage.inputLastName(randomName())
      registerPage.inputEmail(randomEmail())
      registerPage.inputPassword("ThisIsAPassword")
      registerPage.inputConfirmPassword("ThisIsAPassword")
      registerPage.clickRegisterButton()
      cy.verifyContainText('.result', 'Your registration completed')
    })

})