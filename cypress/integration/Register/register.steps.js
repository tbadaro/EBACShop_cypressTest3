/// <reference types="cypress" />

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps" 
const { SignInPage, myAccountPage } = require('../../support/pages')
const data = require('../../fixtures/data.json')
var faker = require('faker');

let emailFaker = faker.internet.email()

Given('I visit EBACStore sing-in page', () =>{
    cy.visit('/my-account/')
})
When('I enter an unregisterd email and a password {string}', () =>{
    SignInPage.register(emailFaker, data.senha)
    
})
When('I enter a previously registerd email {string} and a password {string}', () =>{
    SignInPage.register(data.email, data.senha)
    
})
Then('my account page should be visible', () => {
    myAccountPage.pannelButton.should('be.visible')
})
Then('an error should be visible', () => {
    myAccountPage.errorMessage.should('be.visible')
})
