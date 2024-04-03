/// <reference types= "cypress"/>

describe('Funcionalidade Cadastro de email', () => {

  beforeEach(() => {
    cy.visit('/')
  });
  
  it('Deve fazer cadastro de email com sucesso', () => {
    cy.get('#signup-email').type('email@teste.com')
    cy.get('#signup-button').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Cadastro realizado com sucesso! Você receberá nossas recomendações em breve.')
    })
  })

  it('Deve validar cadastro de email com formato inválido', () => {
    cy.get('#signup-email').type('fddfd.com')
    cy.get('#signup-button').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Email com formato inválido')
    })
  })



})