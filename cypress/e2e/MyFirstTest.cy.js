describe('My First Test', () => {
  it('Launch Browser', () => {
    cy.visit('https://automationexercise.com/')
    cy.title().should('eq','Automation Exercise')
  })

  it('Home page', () => {
    cy.visit('https://automationexercise.com/')
    cy.get("i.fa fa-home").click()
    cy.title().should('eq','Automation Exercise')
    cy.get(".col-sm-6").contains("Automation")
  })

})