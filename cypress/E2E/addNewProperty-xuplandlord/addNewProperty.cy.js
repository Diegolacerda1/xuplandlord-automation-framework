import dashboardPageObjects from '../../support/pageObjects/dashboard.pageObjects' 
import loginPageObjects from "../../support/pageObjects/login.pageObjects";

describe('Add New Property', () => {
    beforeEach(() => {
        cy.visit("/");
        
        // loginPageObjects.inputUserName()
        // loginPageObjects.inputPassword()
        // loginPageObjects.loginApp()
        cy.request('POST', 'https://xup-landlord.herokuapp.com/auth/signin', { 
    username: 'didi@gmail.com', 
    password: 'Didi1234567'
}).then(
(response) => {
window.localStorage.setItem('accessToken', response.body.accessToken)
cy.log(response)
}
) 
      });
    it('should add a new property as owner', () => {
        dashboardPageObjects.btnAddNewProperty()
        dashboardPageObjects.btnLetsAddIt()
        dashboardPageObjects.btnStudio()
        dashboardPageObjects.btnContinue()

    });
    
});