const dashboardElements = require('../elements/dashboard.elements').ADDNEWPROPERTYFORM

class NewProperty {

    btnAddNewProperty() {
        cy.get(dashboardElements.btnAddNewProperty).click()
    }; 
    btnLetsAddIt() {
        cy.get(dashboardElements.btnLetsAddIt).click()
    };
    btnStudio() {
        cy.get(dashboardElements.btnStudio).click()
    };
    btnContinue(){
        cy.get(dashboardElements.btnContinue).click()
    };
    formAddress() {
        cy.get(dashboardElements.formAddress).type("4152 Michigan Ave, New Smyrna Beach, Fl 32169, USA")
    };
    formEstimatedRent() {
        cy.get(dashboardElements.formEstimatedRent).type("2000")
    };
    btnCreateHOA() {
        cy.get(dashboardElements.btnCreateCommunityAssociation).click()
    };
    formHoaName() {
        cy.get(dashboardElements.formCommunityAssociationName).type("TEReZA")
    };
    formHoaAddress() {
        cy.get(dashboardElements.formHoaAddress).type("23rd Place, Coconut Creek, Florida 33073, USA")
    }
    
}

export default new NewProperty();