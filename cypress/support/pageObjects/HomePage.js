class HomePage//function to return xpath of each object in home page
{
    getMainMenuList()
    {
        return cy.get('li.jsx-79662652 > a')
    }

    getUpComingEventsContainer()
    {
        return cy.get('span').contains('Upcoming Events').parent('b').parent('p').parent('div').children('a')
    }

    getLatestStoriesContainer()
    {
        return cy.get('h3').contains('Latest Stories').parent('div').parent('div').children('[data-cy="post-item"]')
    }

    getPremiumContentContainer()
    {
        return cy.get('h3').contains('Premium Content').parent().parent('div').children('ul').children('li')
    }

    getLatestJobContainer()
    {
        return cy.get('h3').contains('Latest Jobs').parent().parent('div').children('div').children('div')
    }

    getLoginMenu()
    {
        return cy.get('a').contains('Log In')
    }

    getLoginFormTitle()
    {
        return cy.get('h2').contains('Log in')
    }

    getLoginFormEmailField()
    {
        return cy.get("input[placeholder='Email Address']")
    }

    getLoginFormPasswordField()
    {
        return cy.get("input[placeholder='Password']")
    }

    getLoginButton()
    {
        return cy.get("button[data-cy='login-btn']")
    }

    getAccountSpanText()
    {
        return cy.get("span[data-cy='profile-menu']").children('p')
    }

    getAccountSpanParent()
    {
        return cy.get("span[data-cy='profile-menu']").parent('span')
    }

    getAccountSettingMenuButton()
    {
        return cy.get('a').contains('Account settings').parent('li')
    }

}

export default HomePage;