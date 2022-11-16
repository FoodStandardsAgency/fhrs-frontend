let fhrs = {};

fhrs.typeInAField = function (field, value) {
  const fields = {
    business: '[data-fsa-at="input-business-name-search"]',
    location: '[data-fsa-at="input-address-search"]',
  }
  return cy.get(fields[field]).type(value);
}

fhrs.setSort = function (value) {
  return cy.get('[data-fsa-at="search-sort"]').select(value);
}

fhrs.setItemsPerPage = function (value) {
  return cy.get('[data-fsa-at="results-per-page"]').select(value);
}

fhrs.firstResultContains = function (value) {
  return cy.get('.fhrs-search-card h2 a').first().contains(value);
}

fhrs.firstResultClick = function () {
  return cy.get('.fhrs-search-card h2 a').first().click();
}

fhrs.switchToLanguage = function (lang) {
  cy.get('.header__menu').click();
  cy.get('.header__languages--mobile').find('a').contains(lang).click();
}

export default fhrs;



