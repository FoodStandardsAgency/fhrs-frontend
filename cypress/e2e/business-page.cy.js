import fhrs from "../lib/FHRS";
import 'cypress-axe';

function unquote(str) {
    return str.replace(/(^")|("$)/g, '');
}

Cypress.Commands.add(
    'before',
    {
        prevSubject: 'element',
    },
    (el, property) => {
        const win = el[0].ownerDocument.defaultView;
        const before = win.getComputedStyle(el[0], 'before');
        return unquote(before.getPropertyValue(property));
    },
);

describe('Business page', () => {
  beforeEach(() => {
    cy.visit('/business/1486759/zizza-pizza')
    cy.injectAxe()
  })
  it('Passes accessibility', () => {
    cy.checkA11y();
  });
  it('Displays a badge', () => {
    cy.get('.business-hero__badge--5--3');
  });
  it.only('Can search the local authority', () => {
    cy.get('[data-fsa-at="search-this-local-authority-area"]').click();
    cy.get('h1').contains('Search the Gwynedd area');
    
  });
})
