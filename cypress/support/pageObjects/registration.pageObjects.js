const registrationElements = require('../elements/registration.elements').REGISTRATIONFORM

class Registration {

    inputSignUp() {
        cy.get(registrationElements.inputSignUp).click()
    }
    inputFirstName() {
        cy.get(registrationElements.inputFirstName).type()
    }
    inputLastName() {
        cy.get(registrationElements.inputLastName).type()
    }
    inputEmail() {
        cy.get(registrationElements.inputEmail).type()
    }
    inputPassword() {
        cy.get(registrationElements.inputPassword).type("Didi34526261")
    }
    inputConfirmPassword() {
        cy.get(registrationElements.inputConfirmPassword).type("Didi34526261")
    }
    inputOwnerBtn() {
        cy.get(registrationElements.inputOwnerBtn).click({ force: true })
    }
    inputTenantBtn() {
        cy.get(registrationElements.inputTenantBtn).click({ force: true })
    }
    inputManagerBtn() {
        cy.get(registrationElements.inputManagerBtn).click({ force: true })
    }
    inputAgreementCheckBox() {
        cy.get(registrationElements.inputAgreementCheckBox).click()
    }
    inputSubmitBtn() {
        cy.get(registrationElements.inputSubmitBtn).click()
    }
}

export default new Registration();