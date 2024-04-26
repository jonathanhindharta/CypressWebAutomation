class AccountSettingsPage//function to return xpath of each object in home page
{
    getSettingsTitle()
    {
        return cy.get('h2').contains('Settings')
    }

    getEmailDiv()
    {
        return cy.get("div[data-cy='email']")
    }

    getEmailText()
    {
        return cy.get("div[data-cy='email']").children()
    }

    getPasswordDiv()
    {
        return cy.get("div[data-cy='password']")
    }
}

export default AccountSettingsPage;