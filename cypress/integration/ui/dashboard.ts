/// <reference types="cypress" />
describe("Should see Dashboard with all necessary elements", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/");
  });

  afterEach(() => {
    cy.logout();
  });

  it("User should see sidenav with avatar and icons", () => {
    cy.get(".sidenav").should("exist");

    cy.get(".sidenav__avatar-img").should("exist");
    cy.get(".sidenav__items > a").should("have.length", 4);
  });

  it("User should see serachInput", () => {
    cy.get(".search-input").should("exist");
  });

  it("User should see 2 movie sections", () => {
    cy.get(".movie-section").should("have.length", 2);
  });

  it("In the first section user should see 'Trending' title", () => {
    cy.get(".movie-section:first-child > .heading-primary").should(
      "have.text",
      "Trending"
    );
  });

  it("In the first section user should see 'Trending' section with a slider", () => {
    cy.get(".movie-section:first-child > .movie-card-slider").should("exist");
  });

  it("In the second section user should see Recommended section", () => {
    cy.get(".movie-section:nth-child(2) > .heading-primary").should(
      "have.text",
      "Recommended for you"
    );
  });

  it("In the second Section user should see Recommended section with at least 3 movies that are cards-small", () => {
    cy.get(".movie-section:nth-child(2) .card-small").should(
      "have.length.greaterThan",
      3
    );
  });

  it("The first item in the navbar should be selected", () => {
    cy.get(".sidenav__items > a:first-child").should("have.class", "active");
  });
});
