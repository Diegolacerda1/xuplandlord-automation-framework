const registrationElements = require('../elements/registration.elements').REGISTRATIONFORM
import { faker } from "@faker-js/faker";

const userData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 12, prefix: "Di12" }),
  };

class Registration {

    inputSignUp() {
        cy.get(registrationElements.inputSignUp).click()
    }
    inputFirstName() {
        cy.get(registrationElements.inputFirstName).type(userData.firstName)
    }
    inputLastName() {
        cy.get(registrationElements.inputLastName).type(userData.lastName)
    }
    inputEmail() {
        cy.get(registrationElements.inputEmail).type(userData.email)
    }
    inputPassword() {
        cy.get(registrationElements.inputPassword).type(userData.password)
    }
    inputConfirmPassword() {
        cy.get(registrationElements.inputConfirmPassword).type(userData.password)
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