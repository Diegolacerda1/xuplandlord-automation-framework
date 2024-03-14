const loginElements = require('../elements/login.elements').LOGINFORM

class Login {

    inputUserName(didi) {
        cy.get(loginElements.inputUserName).type("didi@gmail.com")
    }

    inputPassword(didi1) {
        cy.get(loginElements.inputPassword).type("Didi12345678")
    }

    loginApp() {
        cy.get(loginElements.btnContinue).click()
    }
}

export default new Login();