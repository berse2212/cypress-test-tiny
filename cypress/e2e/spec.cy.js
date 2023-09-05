/// <reference types="cypress" />

describe('page', () => {
  it('works', function () {
    const amount = 1;

    cy.visit('index.html?amount=' + amount);

    cy.contains('Hello World').should('be.visible');
    cy.contains('Hello XHR'.repeat(amount)).should('be.visible');
    cy.contains('ERROR').should('not.exist');

  })

  it('still works', () => {
    const amount = 40;

    cy.visit('index.html?amount=' + amount);

    cy.contains('Hello World').should('be.visible');
    cy.contains('ERROR', {timeout: 20000}).should('not.exist');
    cy.contains('Hello XHR'.repeat(amount), {timeout: 30000}).should('be.visible');
  })

  it('does not work', () => {
    const amount = 1000;

    cy.visit('index.html?amount=' + amount);

    cy.contains('Hello World').should('be.visible');
    cy.contains('ERROR', {timeout: 20000}).should('not.exist');
    cy.contains('Hello XHR'.repeat(amount), {timeout: 30000}).should('be.visible');
  })
})
