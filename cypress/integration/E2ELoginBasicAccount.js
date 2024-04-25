import HomePage from '../support/pageObjects/HomePage'

const homePage = new HomePage()

//for QA Engineer Bonus Assignment Login to Basic Account and Check Account Setting
describe('Login to Basic Account and Check Account Setting', function() {

    it('Login to Basic Account In Main Menu', function() {
        cy.visit(Cypress.env('url_e2e_automation'))
        cy.wait(Cypress.env('element_load_time_out'))
        homePage.geLoginButton().click()
        cy.wait(Cypress.env('element_load_time_out'))
        homePage.geLoginFormTitle().should('be.visible')
        homePage.geLoginFormEmailField().should('be.visible')
        homePage.geLoginFormPasswordField().should('be.visible')
    })
    
})