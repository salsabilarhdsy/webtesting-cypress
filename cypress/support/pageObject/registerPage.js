class RegisterPage {
    genderMale = '[id="gender-male"]'
    genderFemale = '[id="gender-female"]'
    firstName = '[id="FirstName"]'
    lastName = '[id="LastName"]'
    email = '[id="Email"]'
    pwd = '[id="Password"]'
    confirmPwd = '[id="ConfirmPassword"]'
    registerBtn = '[id="register-button"]'

    chooseMale(){
        cy.get(this.genderMale).click()
    }

    chooseFemale(){
        cy.get(this.genderFemale).click()
    }

    inputFirstName(firstName){
        // example of using customize commands in cypress
        cy.typeField(this.firstName, firstName)
        // cy.get(this.firstName).type(firstName)
    }

    inputLastName(lastName){
        cy.get(this.lastName).type(lastName)
    }

    inputEmail(email){
        cy.get(this.email).type(email)
    }

    inputPassword(pwd){
        cy.get(this.pwd).type(pwd)
    }

    inputConfirmPassword(confirmPwd){
        cy.get(this.confirmPwd).type(confirmPwd)
    }

    clickRegisterButton(){
        cy.get(this.registerBtn).click()
    }
}

export default new RegisterPage()

