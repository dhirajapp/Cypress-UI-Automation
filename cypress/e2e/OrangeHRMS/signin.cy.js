describe('Login', () => {
    it('Login page', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.url().should('include','orangehrmlive')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
      cy.title().should('eq','OrangeHRM')
      cy.xpath("//input[@placeholder='Username']").type('Admin')
      cy.xpath("//input[@placeholder='Username']").should('have.value','Admin')
      cy.xpath("//input[@placeholder='Password']").type('admin123')
      cy.xpath("//input[@placeholder='Password']").should('have.value','admin123')
      cy.xpath("//button[normalize-space()='Login']").click()
      cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      
      
    })
})