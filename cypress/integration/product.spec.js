describe("Product", () => {
  before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("Click on Add to cart shoud display an informative message & update cart quantity", () => {
    const cartQuantity = "header nav ul button:first-child";

    cy.visit("/product/car-lights-and-stars");

    cy.contains("Successfully added to cart").should("not.be.visible");

    cy.contains("Add to cart").click();

    cy.get(cartQuantity).contains("0");
    cy.contains("Successfully added to cart").should("be.visible");
    cy.get(cartQuantity).contains("1");
  });

  it("Click on similar product should redirect", () => {
    cy.visit("/product/car-lights-and-stars");

    cy.contains("low angle photography of trees at daytime").click();

    cy.url().should(
      "include",
      "/product/low-angle-photography-of-trees-at-daytime"
    );
  });

  it("Scroll Similar product should display more similar product", () => {
    cy.visit("/product/car-lights-and-stars");

    cy.contains("Seashore").should("not.be.visible");
    cy.get(".slick-dots > :nth-child(2) > button").click();
    cy.contains("Seashore").should("not.be.visible");
  });
});
