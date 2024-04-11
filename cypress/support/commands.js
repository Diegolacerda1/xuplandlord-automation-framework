// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email = 'didi@gmail.com', password = 'Didi1234567') => {   
    cy.request('POST', 'https://xup-landlord.herokuapp.com/auth/signin', { 
    username: email, 
    password: password
}).then(
(response) => {
    if(response.status === 201) {
        window.localStorage.setItem('accessToken', response.body.accessToken)
        
    }

}
) 
})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })