import registrationPageObjects from "../../support/pageObjects/registration.pageObjects";
import {faker} from "@faker-js/faker"

const userData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password({length: 12, prefix: 'Di12' })
}

describe('Registration functionality', () => {

    beforeEach(() => {
        cy.visit('/')
    });
    it('should register as an Owner', () => {
        registrationPageObjects.inputSignUp()
        registrationPageObjects.inputFirstName()
        registrationPageObjects.inputLastName()
        registrationPageObjects.inputEmail()
        registrationPageObjects.inputPassword()
        registrationPageObjects.inputConfirmPassword()
        registrationPageObjects.inputOwnerBtn()
        registrationPageObjects.inputAgreementCheckBox()
        // registrationPageObjects.inputSubmitBtn()
        
        //Assertion
        cy.get("#kt_header")
      .should("be.visible")
      .and("contain", "Property Managers");
    });

    it('should register as an Property Manager', () => {
        registrationPageObjects.inputSignUp()
        registrationPageObjects.inputFirstName()
        registrationPageObjects.inputLastName()
        registrationPageObjects.inputEmail()
        registrationPageObjects.inputPassword()
        registrationPageObjects.inputConfirmPassword()
        registrationPageObjects.inputManagerBtn()
        registrationPageObjects.inputAgreementCheckBox()
        // registrationPageObjects.inputSubmitBtn()
        
        // Assertion
        cy.get("#kt_header").should("be.visible").and("contain", "Properties");
    });

    it('should register as an Tenant', () => {
        registrationPageObjects.inputSignUp()
        registrationPageObjects.inputFirstName()
        registrationPageObjects.inputLastName()
        registrationPageObjects.inputEmail()
        registrationPageObjects.inputPassword()
        registrationPageObjects.inputConfirmPassword()
        registrationPageObjects.inputTenantBtn()
        registrationPageObjects.inputAgreementCheckBox()
        // registrationPageObjects.inputSubmitBtn()
        // should add assertions
    });
});