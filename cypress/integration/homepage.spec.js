describe("Homepage", () => {
  it("Click on Details button should display product page", () => {
    cy.visit("/");

    cy.contains("Car lights and stars")
      .first()
      .click();

    cy.url().should("include", "/product/");
  });

  it("Click on a category should display category page", () => {
    cy.visit("/");

    cy.get('[data-name="container-fluid"] > :last-child > :first-child')
      .first()
      .click();

    cy.url().should("include", "/categories/prints");
  });
});
