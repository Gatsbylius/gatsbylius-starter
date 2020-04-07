describe("Product", () => {
  it("Click on Add to cart shoud display an informative message", () => {
    const cartQuantity = "header nav ul button:first-child";

    cy.visit("/product/car-lights-and-stars");

    cy.contains("Successfully added to cart").should("not.be.visible");

    cy.contains("Add to cart").click();

    cy.get(cartQuantity).contains("0");
    cy.contains("Successfully added to cart").should("be.visible");
    cy.get(cartQuantity).contains("1");
  });
});
