/// <reference types="cypress" />

export const myAccountPage = {
    get pannelButton() {return cy.get(`.woocommerce-MyAccount-navigation-link--dashboard > a`)},
    get errorMessage() {return cy.get('.woocommerce-error > li')}
}