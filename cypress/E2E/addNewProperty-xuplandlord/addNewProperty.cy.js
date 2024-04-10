import dashboardPageObjects from "../../support/pageObjects/dashboard.pageObjects";
import loginPageObjects from "../../support/pageObjects/login.pageObjects";

describe("Add New Property", () => {
  beforeEach(() => {
    cy.visit("/")

    // loginPageObjects.inputUserName()
    // loginPageObjects.inputPassword()
    // loginPageObjects.loginApp()
    
       
      cy.request('POST', 'https://xup-landlord.herokuapp.com/auth/signin', { 
      username: 'didi@gmail.com', 
      password: 'Didi1234567'
  }).then(
  (response) => {

    expect(response.status).to.equal(201)
    expect(response.body).to.have.property('accessToken')
  window.localStorage.setItem('accessToken', response.body.accessToken)
  }
  ); 
  

  });


  it("should add a new property as owner", () => {
    dashboardPageObjects.btnAddNewProperty();
    dashboardPageObjects.btnLetsAddIt();
    dashboardPageObjects.btnStudio();
    dashboardPageObjects.btnContinue();
  });
});
