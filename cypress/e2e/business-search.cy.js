import fhrs from "../lib/FHRS";
import 'cypress-axe';

describe('Business search', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
  })
  it('Shows pizza when searching for pizza', () => {
    fhrs.typeInAField('business', 'pizza');
    cy.get('.ratings-search-box__submit input').click();
    fhrs.firstResultContains('Zizza Pizza');
  });
  it('Shows different pizza in Canterbury', () => {
    fhrs.typeInAField('business', 'pizza');
    fhrs.typeInAField('location', 'canterbury')
    cy.get('.ratings-search-box__submit input').click();
    fhrs.firstResultContains('Marottas Pizza');
  })
  it('Can sort the output', () => {
    fhrs.typeInAField('business', 'pizza');
    fhrs.typeInAField('location', 'canterbury')
    cy.get('.ratings-search-box__submit input').click();
    fhrs.setSort('alpha');
    fhrs.firstResultContains('Best Kebab And Pizza Time');
    fhrs.setSort('desc_alpha');
    fhrs.firstResultContains('Tops Pizza');
    fhrs.setSort('desc_rating');
    fhrs.firstResultContains('Marios Pizza');
    fhrs.setSort('rating')
    fhrs.firstResultContains('Pizza Hut');
  })
  it('Can show more results per page', () => {
    fhrs.typeInAField('business', 'pizza');
    cy.get('.ratings-search-box__submit input').click();
    fhrs.setItemsPerPage('50');
    cy.get('.fhrs-layout__center').find('.fhrs-search-card').should('have.length', 50);
    cy.get('p.showing').contains('Showing 1 - 50');
  })
  it('Can show a map', () => {
    fhrs.typeInAField('business', 'pizza');
    cy.get('[data-fsa-at="map-toggle"]').click();
    cy.get('.ratings-search-box__submit input').click();
    cy.get('.MicrosoftMap').should('be.visible');
    cy.get('.fhrs-search-card__map-pin--1').should('be.visible');
    cy.get('[data-fsa-at="map-toggle"]').click();
    cy.get('.MicrosoftMap').should('not.be.visible');
    cy.get('.fhrs-search-card__map-pin--1').should('not.be.visible');
  })
  it('Can switch to Welsh and retain search', () => {
    fhrs.typeInAField('business', 'pizza');
    fhrs.typeInAField('location', 'canterbury')
    cy.get('.ratings-search-box__submit input').click();
    fhrs.switchToLanguage('Cymraeg');
    fhrs.firstResultContains('Marottas Pizza');
    cy.get('p.showing').contains('Dangos ');
  });
  it('Can visit a business page and return to results', () => {
    fhrs.typeInAField('business', 'pizza');
    fhrs.typeInAField('location', 'canterbury')
    cy.get('.ratings-search-box__submit input').click();
    fhrs.firstResultClick();
    cy.get('.business-hero__link--back').click();
    fhrs.setSort('alpha');
    firstResultContains('Best Kebab And Pizza Time');
  });
  it.only('Keeps the enhanced search open when used', () => {
    fhrs.typeInAField('business', 'pizza');
    fhrs.typeInAField('location', 'canterbury')
    cy.get('[data-fsa-at="more-search-options"]').click();
    cy.get('[data-fsa-at="radio-rating"]').click();
    cy.get('.ratings-search-box__submit input').click();
    cy.get('[data-fsa-at="radio-rating"]').should('be.visible').should('be.checked');
    cy.get('[data-fsa-at="more-search-options"]').contains('Fewer search options');
    cy.get('p.showing').contains('Showing 1 - 10');
    cy.injectAxe();
    cy.checkA11y();
  });
})
