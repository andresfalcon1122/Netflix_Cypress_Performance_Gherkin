///<reference types="cypress"/>

describe('Netflix Login', () => {
    it('successfully logs in with valid credentials', () => {
      cy.visit('https://www.netflix.com/login');
  
      //cy.get('#id_userLoginId').type('utest0423@gmail.com');
      cy.get('[data-uia="login-field"]').type('utest0423@gmail.com', {force: true})

      cy.get('#id_password').type('12345678');

      cy.get('.btn', { timeout: 10000 }).should('be.visible');

      cy.get('.btn').click();
  
      cy.url().should('include', '/browse');
    });
  });