import registrationPageObjects from "../../support/pageObjects/registration.pageObjects";

beforeEach(() => {
    cy.visit('/')
});

describe('Registration functionality', () => {
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
    });
});