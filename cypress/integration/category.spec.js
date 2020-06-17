describe("Category", () => {
  it("should display subcategories & a link for all", () => {
    cy.visit("/category/prints");
    cy.contains("All Prints").should("be.visible");
    cy.contains("Cars").should("be.visible");
    cy.contains("Food").should("be.visible");
    cy.contains("Cities").should("be.visible");
    cy.contains("Nature").should("be.visible");
  });

  it("click on a subcategory shoud display related products", () => {
    cy.visit("/category/prints");
    cy.contains("Nature").click();
    cy.contains("Stars & sand").should("be.visible");
    cy.contains("Beatle").should("be.not.visible");
  });

  it("click on a product should redirect to it", () => {
    cy.visit("/category/prints");
    cy.contains("Wave").click();
    cy.url().should("include", "/product/wave");
  });
});
