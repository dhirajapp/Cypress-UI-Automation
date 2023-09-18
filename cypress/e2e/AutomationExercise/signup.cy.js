describe('Signup', () => {
    it('Signup page', () => {
      cy.visit('https://automationexercise.com/')
      cy.title().should('eq','Automation Exercise')
      cy.get("a[href='/login']").click()
      cy.get("div[class='signup-form'] h2").contains("New User Signup!")
      cy.get("input[placeholder='Name']").type("Dhiraj Kumar")
      cy.get("input[data-qa='signup-email']").type("serdhiraj312@gmail.com")
      cy.get("button[data-qa='signup-button']").click()
      
    })
})