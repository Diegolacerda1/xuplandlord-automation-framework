import loginPageObjects from "../../support/pageObjects/login.pageObjects";

describe('Login functionality', () => {

    beforeEach(() => {

        cy.visit('/') 
    })
   
    it('should successfully log in with valid credentials', () => {
       loginPageObjects.inputUserName()
       loginPageObjects.inputPassword()
       loginPageObjects.loginApp()
    });
    
});