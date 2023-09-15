class LoginPage {
    email = '[id="Email"]'
    pwd = '[id="Password"]'
    loginBtn = '[value="Log in"]'

    inputEmail(email){
        cy.get(this.email).type(email)
    }

    inputPassword(pwd){
        cy.get(this.pwd).type(pwd)
    }

    clickLoginButton(){
        cy.get(this.loginBtn).click()
    }
}

export default new LoginPage()