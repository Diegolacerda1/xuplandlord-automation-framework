import dashboardPageObjects from "../../support/pageObjects/dashboard.pageObjects";
import loginPageObjects from "../../support/pageObjects/login.pageObjects";

describe("Add New Property", () => {
  beforeEach(() => {
    cy.visit("/")

    loginPageObjects.inputUserName()
    loginPageObjects.inputPassword()
    loginPageObjects.loginApp()
    
  });


  it("should add a new property as owner", () => {
    dashboardPageObjects.btnAddNewProperty();
    dashboardPageObjects.btnLetsAddIt();
    dashboardPageObjects.btnStudio();
    dashboardPageObjects.btnContinue();
  });
});
