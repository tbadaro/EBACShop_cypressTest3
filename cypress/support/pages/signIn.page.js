/// <reference types="cypress" />

class SignInPage{
    get registerText() {return cy.get(':nth-child(2) > h2')}
    get #reg_email() {return cy.get("#reg_email")}
    get #reg_password() {return cy.get("#reg_password")}
    get registerButton() {return cy.get(":nth-child(4) > .button")}


    register(email, pass){
        this.#reg_email.type(email, {force : true});
        this.#reg_password.type(pass);
        this.registerButton.click()
    }
}
module.exports = new SignInPage