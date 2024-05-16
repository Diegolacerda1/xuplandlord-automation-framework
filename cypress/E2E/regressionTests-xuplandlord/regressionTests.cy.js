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

    context('Validate Registration Form', () => {
        beforeEach(() => {
            cy.visit("/")
        });
        it("should register as an Owner", () => {
            registrationPageObjects.inputSignUp();
            registrationPageObjects.inputFirstName();
            registrationPageObjects.inputLastName();
            registrationPageObjects.inputEmail();
            registrationPageObjects.inputPassword();
            registrationPageObjects.inputConfirmPassword();
            registrationPageObjects.inputOwnerBtn();
            registrationPageObjects.inputAgreementCheckBox();
            registrationPageObjects.inputSubmitBtn()
        
            //Assertion
            cy.get("#kt_header")
              .should("be.visible")
              .and("contain", "Property Managers");
          });
          it("should register as an Property Manager", () => {
            registrationPageObjects.inputSignUp();
            registrationPageObjects.inputFirstName();
            registrationPageObjects.inputLastName();
            registrationPageObjects.inputEmail();
            registrationPageObjects.inputPassword();
            registrationPageObjects.inputConfirmPassword();
            registrationPageObjects.inputManagerBtn();
            registrationPageObjects.inputAgreementCheckBox();
            // registrationPageObjects.inputSubmitBtn()
        
            // Assertion
            cy.get("#kt_header").should("be.visible").and("contain", "Properties");
          });
        
    })

    
});