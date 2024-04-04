const loginElements = require('../elements/login.elements').LOGINFORM

class Login {

    inputUserName() {
        cy.get(loginElements.inputUserName).type("didi@gmail.com")
    }

    inputPassword() {
        cy.get(loginElements.inputPassword).type("Didi1234567")
    }

    loginApp() {
        cy.get(loginElements.btnContinue).click()
    }
}

export default new Login();