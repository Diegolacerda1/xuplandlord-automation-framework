const dashboardElements = require('../elements/dashboard.elements').addNewProperty

class NewProperty {

    btnAddNewProperty() {
        cy.get(dashboardElements.btnAddNewProperty).click()
    } 
    btnLetsAddIt() {
        cy.get(dashboardElements.btnLetsAddIt).click()
    }
    btnStudio() {
        cy.get(dashboardElements.btnStudio).click()
    }
    btnContinue(){
        cy.get(dashboardElements.btnContinue).click()
    }

}

export default new NewProperty();