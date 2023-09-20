describe('Checkout Page', () => {
    it('checkout', () => {
      cy.visit('https://automationexercise.com/')
      cy.title().should('eq','Automation Exercise')
      cy.get("body > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)']").click()
      cy.title().should('eq','Automation Exercise - Checkout')
      cy.get(".active").contains("Shopping Cart")
      cy.get(".btn.btn-default.check_out").click()
      cy.get("section[id='do_action'] p:nth-child(1)").contains("Register / Login account to proceed on checkout.")
   
    })
})