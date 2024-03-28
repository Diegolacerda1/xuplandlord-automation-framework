import loginPageObjects from "../../support/pageObjects/login.pageObjects";

describe("Login functionality", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should successfully log in as an Owner with valid credentials", () => {
    loginPageObjects.inputUserName();
    loginPageObjects.inputPassword();
    loginPageObjects.loginApp();
    cy.get("#kt_header")
      .should("be.visible")
      .and("contain", "Property Managers");
  });

  it.only("should successfully log in as an Property Manager with valid credentials", () => {
    loginPageObjects.inputUserName();
    loginPageObjects.inputPassword();
    loginPageObjects.loginApp();
    cy.get("#kt_header").should("be.visible").and("contain", "Properties");
  });
});
