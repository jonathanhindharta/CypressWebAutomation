import HomePage from '../support/pageObjects/HomePage'

let menuName=[]
const homePage = new HomePage()
//for QA Engineer Assignment Part 1 E2E Automation
describe('Part 1 E2E Automation', function() {

    it('Open Tech In Asia Website and Validate Item In Main Menu', function() {
        cy.visit(Cypress.env('url'))

        //looping through the mainMenuLocator because it contains some menus
        homePage.getMainMenuList().each(($el, index, $list) => {
            const menuText=$el.text()
            menuName[index]=menuText.toUpperCase()
        }).then (function(){//use promise because javascript running asynchronous
            //Assert true if each item in the main menu is existing: NEWS, JOBS, DATABASE, EVENTS, ABOUT, ADVERTISE
            expect(menuName).to.include.members(Cypress.env('mandatoryMenu'))
        })
        
    })

    it('Validate Upcoming Events Widget Container in Tech In Asia Website', function() {
        //Assert true if the widget container "Upcoming Events" is visible and contains 3 events
        homePage.getUpComingEventsContainer().should('be.visible').and('have.length',3)
    })

    it('Validate Latest Stories Widget Container in Tech In Asia Website', function() {
        //Assert true if the widget container "Latest Stories" is visible and it is not empty
        homePage.getLatestStoriesContainer().should('be.visible').and('not.be.empty')
    })

    it('Validate Premium Content Widget Container in Tech In Asia Website', function() {
        //Assert true if the widget container "Premium Content" is visible and has greater than or equal 3 items on it.
        homePage.getPremiumContentContainer().should('be.visible').and('have.length.least', 3)
    })

    it('Validate Latest Job Widget Container in Tech In Asia Website', function() {
        //Assert true if the widget container “Latest Jobs” is visible and is not empty.
        homePage.getLatestJobContainer().should('be.visible').and('not.be.empty')
    })
})