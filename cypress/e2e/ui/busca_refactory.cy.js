/// <reference types= "cypress"/>

describe('Funcionalidade Busca de filmes', () => {

  beforeEach(() => {
    cy.visit('/')
  });
  it('Deve fazer a busca de um filme com sucesso', () => {
    cy.fixture('filmes').then((data) => {
      cy.buscaFilme(data.filme)
      cy.get('#results-section').should('contain', data.filme)
    })
  })

  it('Deve validar a busca de um filme inexistente', () => {
    cy.buscaFilme('qqcoisa')
    cy.get('#results-section').should('contain.text', 'Filme não encontrado.')
  })

  it('Deve limpar a busca', () => {
    let filme = 'Inception'
    cy.buscaFilme(filme)
    cy.get('#results-section').should('contain.text', filme)
    cy.get('#clear-button').click()
    cy.get('#results-section').should('not.contain.text', filme)
  })

})