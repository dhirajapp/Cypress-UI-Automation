describe('Login', () => {
    it('Login page', () => {
      cy.visit('https://automationexercise.com/')
      cy.title().should('eq','Automation Exercise')
      cy.get("a[href='/login']").click()
      cy.get("div[class='login-form'] h2").contains("Login to your account")
      cy.get("input[data-qa='login-email']").type("serdhiraj312@gmail.com")
      cy.get("input[placeholder='Password']").type("Dhiraj@123")
      cy.get("button[data-qa='login-button']").click()
      
    })
})