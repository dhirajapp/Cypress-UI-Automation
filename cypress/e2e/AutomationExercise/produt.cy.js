describe('My First Test', () => {
  it('Launch Browser', () => {
    cy.visit('https://automationexercise.com/')
    cy.title().should('eq','Automation Exercise')
  })

  it('Home page', () => {
    cy.visit('https://automationexercise.com/')
    cy.title().should('eq','Automation Exercise')
    cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").click()
    cy.get("div[class='item active'] span:nth-child(1)").contains("Automation")
  })


  it('Product page', () => {
    cy.visit('https://automationexercise.com/')
    cy.title().should('eq','Automation Exercise')
    cy.get("a[href='/products']").click()
    cy.get("#search_product").type("T-shirt")
    cy.get("#submit_search").click()
    cy.get("body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > p:nth-child(2)").contains("Pure Cotton V-Neck T-Shirt")
  })

})