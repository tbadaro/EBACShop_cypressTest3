/// <reference types="cypress" />

export const checkoutPage = {
    get orderNumber() {return cy.get(`.woocommerce-order-overview__order`)}
}