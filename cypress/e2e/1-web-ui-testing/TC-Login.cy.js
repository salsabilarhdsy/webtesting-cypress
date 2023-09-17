import loginPage from '../../support/pageObject/loginPage'
const userLogin = require('../../fixtures/userLogin.json')

describe('DemoWebShop UI Testing - Login', () => {

    beforeEach(() => {
      cy.visit(Cypress.env('webdemoshop_url'))
      cy.clickObject('[class="ico-login"]')
    })

    it('Success Login', () => {
       loginPage.inputEmail(userLogin.positive[0].email)
       loginPage.inputPassword(userLogin.positive[0].password)
       loginPage.clickLoginButton()
       cy.verifyContainText('[href="/customer/info"]', userLogin.positive[0].email)
    })

    it('Failed Login', () => {
        cy.fixture('userLogin.json').then((user) => {
            user.negative.forEach((dataUser) => {
                loginPage.inputEmail(dataUser.email)
                loginPage.inputPassword(dataUser.password)
                loginPage.clickLoginButton()
                cy.get('.ico-login').should('be.visible')
            })
        })
    })



})