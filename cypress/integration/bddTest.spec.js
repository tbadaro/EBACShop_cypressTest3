/// <reference types="cypress" />

const { date } = require('faker/lib/locales/az');
const data = require('../fixtures/data.json')
const { dashboardPage } = require('../support/pages')

describe('Access Admin Panel', () => {

    context('Given I visit EBACStore', () => {
        before(() => {
            cy.visit('/')
        });

        context(`When I login with user ${data.usuario} and pass ${data.senha}` , () => {
            beforeEach(() => {
                cy.login(data.usuario, data.senha)
            });
            
            it('Then the admin dashboard page should be visible', () => {                
                dashboardPage.siteName.should('be.visible');
            });
        });

 
        
    });
    
});