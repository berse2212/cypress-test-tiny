// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'


beforeEach( function () {
  const user = "user";
  cy.intercept({ url: '*', resourceType: /xhr/ }, (req) => {
    req.headers['X-E2E-User'] = user;
  }).as('setUser');
});


// Alternatively you can use CommonJS syntax:
// require('./commands')
