Cypress.Commands.add('buscaFilme', (filme) => { 
    cy.get('#search-input').type(filme)
    cy.get('#search-button').click()
 })