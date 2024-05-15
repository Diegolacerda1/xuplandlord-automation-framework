import loginPageObjects from "../../support/pageObjects/login.pageObjects";

describe('Regression XUP Landlord', () => {
    context('Validate Login Page', () => {
        beforeEach(() => {
            cy.visit("/")
        });

        it('should successfully log in as an Owner with valid credentials', () => {
            loginPageObjects.inputUserName();
    loginPageObjects.inputPassword();
    loginPageObjects.loginApp();
    cy.get("#kt_header")
      .should("be.visible")
      .and("contain", "Property Managers");
        });
    });

    
});