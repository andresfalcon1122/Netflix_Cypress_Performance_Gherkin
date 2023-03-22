const { username, password } = require('./credentials')

describe('Netflix Login', () => {
  beforeEach(() => {
    cy.visit('https://www.netflix.com/login')
  })

  it('Logs in successfully', () => {

    cy.get('[data-uia="login-field"]').type(username, {force: true})
    cy.get('#id_password').type(password)
    cy.get('.login-button').click()

    cy.get('.choose-profile > :nth-child(1)').click()
    cy.url().should('include', '/browse')

  })  
})
