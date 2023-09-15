describe('My First Test', () => {
  it('positive scenario', () => {
    cy.visit('https://automationexercise.com/')
    cy.title().should('eq','Automation Exercise')
  })

  it('Negative scenario', () => {
    cy.visit('https://automationexercise.com/')
    cy.title().should('eq','Manual Exercise')
  })

})