// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('clickObject', (locator) => {
    cy.get(locator)
    .should('be.visible')
    .click()
})

Cypress.Commands.add('typeField', (locator, value) => {
    cy.get(locator)
    .should('be.visible')
    .type(value)
})

Cypress.Commands.add('verifyContainText', (locator, value) => {
    cy.get(locator)
    .should('contain.text', value)
})


/* Cypress.Commands.add('verifyObjectExist', (locator, value) = > {
    cy.get(locator)
    .should('be.visible')
}) */


// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })