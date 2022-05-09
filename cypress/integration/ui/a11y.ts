/// <reference types="cypress-axe" />
/// <reference types="cypress" />

import { terminalLog } from "../../utils";

// Then in your test...
describe("Accessibility", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.injectAxe();
  });

  it("Logs violations to the terminal", () =>
    cy.checkA11y(undefined, undefined, terminalLog));
});
