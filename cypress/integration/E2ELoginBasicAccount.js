import HomePage from '../support/pageObjects/HomePage'
import AccountSettingsPage from '../support/pageObjects/AccountSettingsPage'

const homePage = new HomePage()
const accountSettingsPage = new AccountSettingsPage()

//for QA Engineer Bonus Assignment Login to Basic Account and Check Account Setting
describe('Login to Basic Account and Check Account Setting', function() {

    it('Login to Basic Account In Main Menu', function() {
        cy.visit(Cypress.env('url_e2e_automation'))
        cy.wait(Cypress.env('element_load_time_out'))
        homePage.getLoginButton().click()
        cy.wait(Cypress.env('element_load_time_out'))
        //assert some field in login form is appeared
        homePage.getLoginFormTitle().should('be.visible')
        homePage.getLoginFormEmailField().should('be.visible')
        homePage.getLoginFormPasswordField().should('be.visible')
        homePage.getLoginButton().should('be.visible')

        homePage.getLoginFormEmailField().type(Cypress.env('tia_email'))
        homePage.getLoginFormPasswordField().type(Cypress.env('tia_password'))
        homePage.getLoginButton().click()
        cy.wait(Cypress.env('element_load_time_out'))//wait for loading after login

        homePage.getAccountSpanText().should('be.visible').and('have.text', 'Basic')

        homePage.getAccountSpanParent().click()

        cy.wait(Cypress.env('element_load_time_out'))//wait for loading after click
        //check your account settings page
        homePage.getAccountSettingMenuButton().should('be.visible')
        homePage.getAccountSettingMenuButton().click()

        cy.wait(Cypress.env('element_load_time_out'))//wait for loading after click

        accountSettingsPage.getSettingsTitle().should('be.visible')
        accountSettingsPage.getEmailDiv().should('be.visible')
        //assert that Email is correct
        accountSettingsPage.getEmailText().should('contain',Cypress.env('tia_email'))
        accountSettingsPage.getPasswordDiv().should('be.visible')
    })
    
})