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

    geLoginButton()
    {
        return cy.get('a').contains('Log In')
    }

    geLoginFormTitle()
    {
        return cy.get('h2').contains('Log in')
    }

    geLoginFormEmailField()
    {
        return cy.get("input[placeholder='Email Address']")
    }

    geLoginFormPasswordField()
    {
        return cy.get("input[placeholder='Password']")
    }
}

export default HomePage;